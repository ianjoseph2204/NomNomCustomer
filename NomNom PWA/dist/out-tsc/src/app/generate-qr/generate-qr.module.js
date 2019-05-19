import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { GenerateQrPage } from './generate-qr.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
var routes = [
    {
        path: '',
        component: GenerateQrPage
    }
];
var GenerateQrPageModule = /** @class */ (function () {
    function GenerateQrPageModule() {
    }
    GenerateQrPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GenerateQrPage],
            providers: [
                StatusBar,
                SplashScreen,
                BarcodeScanner,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [GenerateQrPage]
        })
    ], GenerateQrPageModule);
    return GenerateQrPageModule;
}());
export { GenerateQrPageModule };
//# sourceMappingURL=generate-qr.module.js.map