import { HomeService } from './../../../Services/home.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Platform, IonSlides } from '@ionic/angular';
import { RegisterService } from 'src/app/Services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides, {static: true}) slider: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;

  sliderTwo: any;
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 3,
    loop: false,
    centeredSlides: false,
    spaceBetween: 10
  };
  slideOptsThere = {
    initialSlide: 0,
    slidesPerView: 2,
    loop: false,
    centeredSlides: false,
    spaceBetween: 20
  };
  slideOpts = {
    effect: 'flip',
    autoplay: {
    delay: 4000
    }
  };
  sliderData:any;
  categories: any;
  items: any;
  constructor(private homeService:HomeService,
    public registerService:RegisterService,
    public router:Router
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.homeService.GetSliderData().subscribe(res=>{this.sliderData=res.slice(0,10)})
    this.homeService.GetFocusCategories().subscribe(res=>{this.categories=res.slice(0,10)})
    this.homeService.GetFocusItems().subscribe(res=>{this.items=res.slice(0,10)})
  }
  public ionViewWillLeave(){
    this.slider.stopAutoplay();
   }
   slidesDidLoad(slides) {
    this.slider.startAutoplay();
  }
  goToCategories(){
    this.router.navigate(['./tabs/categories'])
  }
  goToItems(){
    this.router.navigate(['./tabs/items',0])
  }
  goToItemListByCategory(id){
    this.router.navigate(['./tabs/items',id])
  }
  goToItemDetails(id){
    this.router.navigate(['./tabs/item-details',id,0])
  }
}
