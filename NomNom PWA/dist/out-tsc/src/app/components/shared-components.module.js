import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [MenuComponent],
            imports: [
                IonicModule,
                CommonModule
            ],
            exports: [MenuComponent]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());
export { SharedComponentsModule };
//# sourceMappingURL=shared-components.module.js.map