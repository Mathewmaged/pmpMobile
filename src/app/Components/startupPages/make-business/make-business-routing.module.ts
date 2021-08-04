import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeBusinessPage } from './make-business.page';

const routes: Routes = [
  {
    path: '',
    component: MakeBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeBusinessPageRoutingModule {}
