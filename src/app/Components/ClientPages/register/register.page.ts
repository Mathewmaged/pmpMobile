import { Router } from '@angular/router';
import { Client } from './../../../Models/client';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegisterService } from 'src/app/Services/register.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  passBool:boolean= false
  confPassBool:boolean=false
  Name: any = null; 
  Email: any  = null; 
  Gender: any = null;  
  Age: any = null; 
  Phone: any = null; 
  Password: any = null; 
  Address: any = null ;
  confPass:any;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  mailValid: boolean = false;
  passValid: boolean = false;
  client:Client
  constructor(private alert:AlertController,
    private registerService:RegisterService,
    private storage:Storage,
    private router:Router
    ) { 
    this.client = new Client();
  }

  ngOnInit() {
  }
  submit(){
    this.mailvalid(this.Email)
    this.confirmPassword()
    if(this.mailValid == true && this.passValid == true && this.Address != null && this.Password != null
      && this.Phone != null && this.Age != null && this.Gender != null && this.Name != null){
        this.client.Address = this.Address;
        this.client.Age = this.Age;
        this.client.Password = this.Password;
        this.client.Gender = this.Gender;
        this.client.Name = this.Name;
        this.client.Phone = this.Phone;
        this.client.Email = this.Email;
        this.registerService.addClient(this.client).subscribe(res=>{
          console.log(res);
          
          if(res != 0){
            this.storage.set('Name',this.Name)
            this.storage.set('Id',res)
            this.storage.set('Email',this.Email)
            this.DoneAlert()
            this.router.navigate(['./tabs/home'])
          }
          else{
            this.submitAlert()
          }
        })
      }
  }
  showPass(){
    this.passBool = !this.passBool
  }
  showConfirmPass(){
    this.confPassBool = !this.confPassBool
  }
  mailvalid(mail)
  { 
    if(mail.match(this.emailPattern))
    {
      this.mailValid = true
    }
    else {
      this.mailValid = false;
      this.presentAlert()
    }
  }
  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'mail not valid !',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'password not valid !',
      buttons: ['OK']
    });
    await alert.present();
  }
  confirmPassword(){
    if(this.Password == this.confPass)
    {
      this.passValid = true
    }
    else {
      this.passValid = false;
      this.presentAlert1()
    }
  }
  async submitAlert(){
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'Error occurred !',
      buttons: ['OK']
    });
    await alert.present();
  }
  async DoneAlert(){
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'Done',
      buttons: ['OK']
    });
    await alert.present();
  }

}
