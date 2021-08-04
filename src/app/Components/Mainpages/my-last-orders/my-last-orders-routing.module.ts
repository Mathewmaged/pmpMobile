import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLastOrdersPage } from './my-last-orders.page';

const routes: Routes = [
  {
    path: '',
    component: MyLastOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLastOrdersPageRoutingModule {}
