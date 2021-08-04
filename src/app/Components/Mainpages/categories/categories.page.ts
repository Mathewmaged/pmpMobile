import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories:any[]=[];
  constructor(private homeService:HomeService,
    public registerService:RegisterService,
    public router:Router,
    private platform:Platform
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.registerService.backbtn = '/tabs/home'
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/tabs/home']);
    });

    this.homeService.AllCategories().subscribe(res=>{
      this.categories = res})
  }
  goToItemListByCategory(id){
    this.router.navigate(['./tabs/items',id])
  }
}
