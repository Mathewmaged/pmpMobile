import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Client } from 'src/app/Models/client';
import { RegisterService } from 'src/app/Services/register.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  Email: any;
  mailValid: boolean = false;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  client: Client;
  Password: any;
  passBool: boolean = false;
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
    if(this.mailValid == true){
      this.client.Email = this.Email;
      this.client.Password = this.Password;
      console.log(this.client);
      
      this.registerService.clientLogin(this.client).subscribe(res=>{
        if(res != null){
          console.log(res);
          this.storage.set('Name',res.name)
          this.storage.set('Id',res.id)
          this.storage.set('Email',this.Email)
          this.router.navigate(['./tabs/home'])
        }
        else{
          this.presentAlert1()
        }
      })
    }
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
      message: 'not valid !',
      buttons: ['OK']
    });
    await alert.present();
  }
  showPass(){
    this.passBool = !this.passBool
  }
}
