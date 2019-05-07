import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'generate-qr', loadChildren: './generate-qr/generate-qr.module#GenerateQrPageModule' },
  { path: 'resto-list', loadChildren: './resto-list/resto-list.module#RestoListPageModule' },
  { path: 'resto1', loadChildren: './resto1/resto1.module#Resto1PageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },  { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
