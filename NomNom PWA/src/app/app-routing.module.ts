import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'home', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'generate-qr', loadChildren: './generate-qr/generate-qr.module#GenerateQrPageModule' },
  { path: 'resto-list', loadChildren: './resto-list/resto-list.module#RestoListPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
