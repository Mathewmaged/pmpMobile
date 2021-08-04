import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { OrderService } from 'src/app/Services/order.service';
import { RegisterService } from 'src/app/Services/register.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-my-last-orders',
  templateUrl: './my-last-orders.page.html',
  styleUrls: ['./my-last-orders.page.scss'],
})
export class MyLastOrdersPage implements OnInit {
  cartList: any;

  constructor(
    public registerService:RegisterService,
    private orderService:OrderService,
    private router:Router,
    private storage:Storage,
    private alert:AlertController,
    private platform:Platform
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.registerService.backbtn = '/tabs/home'
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/tabs/home']);
    });
    this.storage.get('Id').then(val=>{
      if(val == undefined || val == null){
        this.presentAlert()
      }
      else{
        this.orderService.getLastOrders(val).subscribe(res=>{console.log(res);
          this.cartList =res
        })
      }
    })
  }

  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'please register first !!',
      buttons: ['OK']
    });
    await alert.present();
  }
  addToCard(itemId){
    this.router.navigate(['./tabs/item-detailsFromOrder',itemId])
  }
}
