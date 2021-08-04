import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Services/register.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  selectedValues:any;
  constructor(private router:Router,
    public registerService:RegisterService,
    private translate: TranslateService,
    public menuCtrl: MenuController,
    private stora:Storage,
    ) { }
   
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menuCtrl.enable(false);

    this.stora.get('lang').then((val) => {
      console.log(val);
      
    if(val == 1){
      this.registerService.title = 'الصفحة الرئيسية'
      this.registerService.setDir = 'rtl'
      this.registerService.openMenuFromRight = 'end'
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
      // this.router.navigate(['./tabs/home'])
    }
    else if (val == 2){
      this.registerService.title = 'Home'
      this.registerService.openMenuFromRight = 'start'
      this.registerService.setDir = 'ltr'
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      // this.router.navigate(['./tabs/home'])
      this.stora.set('lang', this.selectedValues);
    }
    })
    
  }
  setLang(){
    if(this.selectedValues == 1){
      this.registerService.title = 'الصفحة الرئيسية'
      this.registerService.setDir = 'rtl'
      this.registerService.openMenuFromRight = 'end'
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
      this.stora.set('lang', this.selectedValues);
      this.router.navigate(['EarnPoints'])
    }
    else if (this.selectedValues == 2){
      this.registerService.title = 'Home'
      this.registerService.openMenuFromRight = 'start'
      this.registerService.setDir = 'ltr'
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.router.navigate(['EarnPoints'])
      this.stora.set('lang', this.selectedValues);
    }
  }
  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }
}
