import { ItemToCartPage } from './../../../Modals/item-to-cart/item-to-cart.page';
import { ItemsService } from './../../../Services/items.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, IonSlides, ModalController } from '@ionic/angular';
import { RegisterService } from 'src/app/Services/register.service';
import { ItemDetails } from 'src/app/Models/item-details';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  @ViewChild(IonSlides, {static: true}) slider: IonSlides;
  slideOpts = {
    effect: 'flip',
    autoplay: {
    delay: 4000
    }
  };

  itemId:any;
  itemData: ItemDetails;
  actualPrice:any;
  catId: any;
  url: string;
  constructor(private actRoute:ActivatedRoute,
    private itemServeice:ItemsService,
    public registerService:RegisterService,
    public modalController: ModalController,
    private platform:Platform,
    private router:Router
    ) { 
      this.itemData = new ItemDetails();
    }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.url = this.router.url.split("/")[2];
    if(this.url == 'item-detailsFromOrder'){
      this.registerService.backbtn = '/tabs/my-last-orders'
      this.platform.backButton.subscribe(() => {
        this.router.navigate(['/tabs/my-last-orders']);
      });
    }
    else{
      this.registerService.backbtn = '/tabs/items/'+this.catId
      this.platform.backButton.subscribe(() => {
        this.router.navigate(['/tabs/items',this.catId]);
      });
    }
    this.itemId = this.actRoute.snapshot.params.id;
    this.catId = this.actRoute.snapshot.params.catId;
    this.itemServeice.GetItemsById(this.itemId).subscribe(res=>{this.itemData = res})
  }
  async initModal() {
    const modal = await this.modalController.create({
      component: ItemToCartPage,
      cssClass: 'my-custom-modal-css',
      swipeToClose: true,
      mode:"ios",
      componentProps: {
        'id':  this.itemId,
        'price': this.itemData.price - this.itemData.discount,
        'nameA':this.itemData.nameA,
        'nameE':this.itemData.nameE,
      }
    });

    // modal.onDidDismiss().then((modalDataResponse) => {
    //   if (modalDataResponse !== null) {
    //     this.modalDataResponse = modalDataResponse.data;
    //     console.log('Modal Sent Data : '+ modalDataResponse.data);
    //   }
    // });

    return await modal.present();
  }

  public ionViewWillLeave(){  
    this.slider.stopAutoplay();
   }
   slidesDidLoad(slides) {
    this.slider.startAutoplay();
  }
}
