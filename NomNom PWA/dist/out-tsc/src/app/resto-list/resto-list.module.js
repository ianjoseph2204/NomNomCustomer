import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RestoListPage } from './resto-list.page';
var routes = [
    {
        path: '',
        component: RestoListPage
    }
];
var RestoListPageModule = /** @class */ (function () {
    function RestoListPageModule() {
    }
    RestoListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RestoListPage]
        })
    ], RestoListPageModule);
    return RestoListPageModule;
}());
export { RestoListPageModule };
//# sourceMappingURL=resto-list.module.js.map