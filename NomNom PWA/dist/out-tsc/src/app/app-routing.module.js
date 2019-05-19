import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './login/login.module#LoginPageModule' },
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map