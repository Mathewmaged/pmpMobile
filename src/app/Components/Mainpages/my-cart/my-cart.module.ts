import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCartPageRoutingModule } from './my-cart-routing.module';

import { MyCartPage } from './my-cart.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCartPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyCartPage]
})
export class MyCartPageModule {}
