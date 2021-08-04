import { ItemsService } from './../../../Services/items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { RegisterService } from 'src/app/Services/register.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  catId:any;
  index:any;
  items:any[]=[];
  constructor(private actRoute:ActivatedRoute,
    private homeService:HomeService,
    public registerService:RegisterService,
    private itemService:ItemsService,
    private router:Router,
    private platform:Platform
  ) { }

  ionViewWillEnter(){
    this.index = 1
    this.catId = this.actRoute.snapshot.params.id;
    if(this.catId != 0){
      this.registerService.backbtn = '/tabs/categories'
      this.platform.backButton.subscribe(() => {
        this.router.navigate(['/tabs/categories']);
      });
      this.itemService.GetItemsByCat(this.catId).subscribe(res=>{this.items = res})
    }
    else{
      this.registerService.backbtn = '/tabs/home'
      this.platform.backButton.subscribe(() => {
        this.router.navigate(['/tabs/home']);
      });
      this.homeService.GetFocusItems().subscribe(res=>{ this.items = res })
      
    }
  }
  ngOnInit() {
  }
  goToItemDetails(id){
    this.router.navigate(['./tabs/item-details',id,this.catId])
  }
}
