import * as tslib_1 from "tslib";
import { SharedComponentsModule } from '../components/menu/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RestaurantPage } from './restaurant.page';
var routes = [
    {
        path: '',
        component: RestaurantPage
    }
];
var RestaurantPageModule = /** @class */ (function () {
    function RestaurantPageModule() {
    }
    RestaurantPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                SharedComponentsModule
            ],
            declarations: [RestaurantPage]
        })
    ], RestaurantPageModule);
    return RestaurantPageModule;
}());
export { RestaurantPageModule };
//# sourceMappingURL=restaurant.module.js.map