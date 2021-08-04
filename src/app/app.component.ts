import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/Services/translate-config.service';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterService } from './Services/register.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public network: Network,
    public alertController: AlertController,
    private translate: TranslateService,
    private selectlang: TranslateConfigService,
    private router:Router,
    private platform: Platform,
    public menuCtrl: MenuController,
    public registerService:RegisterService
    ) {
      this.initializeApp();
    }

  initializeApp() {
    // this.lang = 'ar';
    this.platform.ready().then(() => {
    this.router.navigateByUrl('login');
    this.registerService.title = 'الصفحة الرئيسية'
    this.registerService.setDir = 'rtl'
    this.registerService.openMenuFromRight = 'end'
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
    })
    this.network.onDisconnect().subscribe(() => {
      this.presentAlertDone() 
    })
  }
  async presentAlertDone() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'لايوجد إتصال بلإنترنت',
      buttons: ['OK']
    });
    await alert.present();
  }
  goToLogin(){
    this.router.navigate(['user-login'])
    this.menuCtrl.close();
  }
  goToCart(){
    this.router.navigate(['./tabs/my-cart'])
  }
  goToMyOrders(){
    this.router.navigate(['./tabs/my-last-orders'])
    this.menuCtrl.close();
  }
}
