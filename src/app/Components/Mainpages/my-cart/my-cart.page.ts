import { Router } from '@angular/router';
import { OrderService } from './../../../Services/order.service';
import { AddOrder } from './../../../Models/add-order';
import { ItemsService } from './../../../Services/items.service';
import { CartServiceService } from './../../../Services/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RegisterService } from 'src/app/Services/register.service';
import { AddOrderItems } from 'src/app/Models/add-order-items';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
  cartList:any[]=[];
  count: any;
  total:any = 0;
  addOrderObj:AddOrder
  orderItems:AddOrderItems
  constructor(
    private cartService:CartServiceService,
    private storage:Storage,
    private alert:AlertController,
    private itemServeice:ItemsService,
    public registerService:RegisterService,
    private orderService:OrderService,
    private roter:Router,
    private platform:Platform
  ) { 
    this.addOrderObj = new AddOrder();
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.total= 0;
    this.registerService.backbtn = '/tabs/home'
    this.platform.backButton.subscribe(() => {
      this.roter.navigate(['/tabs/home']);
    });
    this.storage.get('Id').then(val=>{
      if(val == undefined || val == null){
        this.presentAlert()
      }
      else{
        this.addOrderObj.cllientId = val;
        this.cartService.getCartList(val).subscribe(res=>{
          this.cartList = res,
          this.cartList.forEach(element => {
            this.total = this.total + (element.itemPrice * element.itemCount)
          });
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
  async presentAlert1() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'Done',
      buttons: ['OK']
    });
    await alert.present();
  }
  decrease(itemId){
    let findItem = this.cartList.find(x => x.id == Number(itemId));
    this.itemServeice.getColorCount(findItem.itemId,findItem.colorId).subscribe(res=>{
      this.count = res
      if(findItem.itemCount > 0){
      findItem.itemCount = findItem.itemCount - 1;
      this.cartService.updateCartItem(findItem).subscribe(res=>{console.log(res);
        this.ionViewWillEnter();
      })
      }
      else{
        this.countAlert1() 
        this.ionViewWillEnter();
      }
    })
  }
  increase(itemId){
    let findItem = this.cartList.find(x => x.id == Number(itemId));
    this.itemServeice.getColorCount(findItem.itemId,findItem.colorId).subscribe(res=>{console.log(res);
      this.count = res
      if(findItem.itemCount < this.count && findItem.itemCount > 0){
      findItem.itemCount = findItem.itemCount + 1;
      this.cartService.updateCartItem(findItem).subscribe(res=>{console.log(res);
        this.ionViewWillEnter();
      })
      }
      else{
        this.countAlert1(),
        this.ionViewWillEnter();
      }

    })
  }
  async countAlert1() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'out of range',
      buttons: ['OK']
    });
    await alert.present();
  }
  async ErrorAlert1() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'Error!!',
      buttons: ['OK']
    });
    await alert.present();
  }
  removeItem(item){
    this.cartService.removeCartItem(item).subscribe(res=>{console.log(res);
      if(res == true){
        this.ionViewWillEnter();
      }
      else{
        this.ErrorAlert1()
      }
    })
  }
  addOrder(){
    this.addOrderObj.orderItems = [];
    this.addOrderObj.cartId = [];
    this.addOrderObj.Total = this.total;
    this.cartList.forEach(element => {
      this.orderItems = new AddOrderItems();
      this.orderItems.ItemId = element.itemId;
      this.orderItems.itemColor = element.colorId;
      this.orderItems.itemCount = element.itemCount;
      this.orderItems.itemPrice = element.itemPrice;
      this.addOrderObj.orderItems.push(this.orderItems);
      this.addOrderObj.cartId.push(element.id);
    });
    this.orderService.addOrder(this.addOrderObj).subscribe(res=>{
      console.log(res);
      
      if(res == true){
        this.roter.navigate(['/tabs/my-last-orders'])
      }
    })
  }
}
