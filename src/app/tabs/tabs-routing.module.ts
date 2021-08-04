import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Components/Mainpages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../Components/Mainpages/categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'items/:id',
        loadChildren: () => import('../Components/Mainpages/items/items.module').then( m => m.ItemsPageModule)
      },
      {
        path: 'item-details/:id/:catId',
        loadChildren: () => import('../Components/Mainpages/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
      },
      {
        path: 'item-detailsFromOrder/:id',
        loadChildren: () => import('../Components/Mainpages/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
      },
      {
        path: 'my-cart',
        loadChildren: () => import('../Components/Mainpages/my-cart/my-cart.module').then( m => m.MyCartPageModule)
      },
      {
        path: 'my-last-orders',
        loadChildren: () => import('../Components/Mainpages/my-last-orders/my-last-orders.module').then( m => m.MyLastOrdersPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
