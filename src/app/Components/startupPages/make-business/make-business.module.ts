import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeBusinessPageRoutingModule } from './make-business-routing.module';

import { MakeBusinessPage } from './make-business.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeBusinessPageRoutingModule,
    TranslateModule
  ],
  declarations: [MakeBusinessPage]
})
export class MakeBusinessPageModule {}
