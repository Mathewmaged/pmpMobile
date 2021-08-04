import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLastOrdersPageRoutingModule } from './my-last-orders-routing.module';

import { MyLastOrdersPage } from './my-last-orders.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLastOrdersPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyLastOrdersPage]
})
export class MyLastOrdersPageModule {}
