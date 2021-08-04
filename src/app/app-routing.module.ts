import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/startupPages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'EarnPoints',
    loadChildren: () => import('./Components/startupPages/earn-points/earn-points-routing.module').then( m => m.EarnPointsPageRoutingModule)
  },
  {
    path: 'make-business',
    loadChildren: () => import('./Components/startupPages/make-business/make-business.module').then( m => m.MakeBusinessPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Components/ClientPages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'item-to-cart/:id/:count/:price/:discount',
    loadChildren: () => import('./Modals/item-to-cart/item-to-cart.module').then( m => m.ItemToCartPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./Components/ClientPages/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  // {
  //   path: 'my-cart',
  //   loadChildren: () => import('./Components/Mainpages/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  // },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
