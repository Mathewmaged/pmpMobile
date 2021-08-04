import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemToCartPageRoutingModule } from './item-to-cart-routing.module';

import { ItemToCartPage } from './item-to-cart.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemToCartPageRoutingModule,
    TranslateModule
  ],
  declarations: [ItemToCartPage]
})
export class ItemToCartPageModule {}
