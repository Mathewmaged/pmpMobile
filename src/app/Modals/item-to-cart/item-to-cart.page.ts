import { CartServiceService } from './../../Services/cart-service.service';
import { ItemsService } from './../../Services/items.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RegisterService } from 'src/app/Services/register.service';
import { AddTocard } from 'src/app/Models/add-tocard';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-item-to-cart',
  templateUrl: './item-to-cart.page.html',
  styleUrls: ['./item-to-cart.page.scss'],
})
export class ItemToCartPage implements OnInit {
  id: any;
  itemColors: any;
  itemCount:any = 0;
  count:any = 0;
  addtocard:AddTocard;
  price: any;
  colorId: any;
  nameA:any;
  nameE:any;
  constructor(
    private modalCtr: ModalController,
    private itemServeice:ItemsService,
    public registerService:RegisterService,
    private storage:Storage,
    private alert:AlertController,
    private cartService:CartServiceService
  ) { 
    this.addtocard = new AddTocard();
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.itemServeice.GetItemColor(this.id).subscribe(res=>{this.itemColors = res,console.log(res);
    })
  }
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }
  decrease(){
    if(this.itemCount > 0)
    this.itemCount = this.itemCount - 1
  }
  increase(){
    console.log(this.count);
    if( this.itemCount < this.count)
    this.itemCount = this.itemCount + 1
  }
  addToCard(){
    this.storage.get('Id').then(val=>{
      if(val == undefined || val == null){
        this.presentAlert()
      }
      else{
        this.addtocard.itemPrice = this.price;
        this.addtocard.itemColor = this.colorId;
        this.addtocard.itemCount = this.itemCount;
        this.addtocard.itemId = this.id;
        this.addtocard.clientId = val;
        if(this.itemCount > 0){
        this.cartService.AddTocard(this.addtocard).subscribe(res=>{
          if(res == true){
            this.close();
            this.presentAlert1()
          }
        })
      }
      else{
        this.countAlert1();
      }
      }
    })

  }
  getColorCount(){
    this.itemServeice.getColorCount(this.id,this.colorId).subscribe(res=>{console.log(res);
      this.count = res
      if(this.itemCount > this.count)
      {
        this.itemCount = 1
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
  async countAlert1() {
    const alert = await this.alert.create({
      cssClass: 'alertCustomCss',
      message: 'out of range',
      buttons: ['OK']
    });
    await alert.present();
  }
}
