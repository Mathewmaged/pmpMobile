import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx'; 
import { IonicStorageModule } from '@ionic/storage';
import { LoginPageRoutingModule } from './Components/startupPages/login/login-routing.module';
import { HTTP } from '@ionic-native/http/ngx';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    LoginPageRoutingModule,
    Ng2SearchPipeModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
           provide: TranslateLoader,
           useFactory: (createTranslateLoader),
           deps: [HttpClient]
         }
      }),
  ],
  providers: [
    Network,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
