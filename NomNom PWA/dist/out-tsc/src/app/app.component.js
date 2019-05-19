import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//added for barcode
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//added for hw back button
/*
import { PopoverController } from '@ionic/angular';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { MenuController, IonRouterOutlet } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router, RouterOutlet } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import { NgModule, ViewChildren, QueryList } from '@angular/core';
*/
var AppComponent = /** @class */ (function () {
    //added for hw back button
    //lastTimeBackPress = 0;
    //timePeriodToExit = 2000;
    //@ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
    function AppComponent(platform, splashScreen, statusBar, 
    //added below
    //barcode 
    barcodeScanner
    //hw back button
    /*
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router,
    private toast: Toast
    */
    ) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.barcodeScanner = barcodeScanner;
        this.initializeApp();
        //added below
        //barcode
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        //hw back button
        //this.backButtonEvent();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //barcode test
            _this.encodeData = "https://www.FreakyJolly.com";
        });
    };
    //added below
    //barcode
    AppComponent.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            alert('Barcode data ' + JSON.stringify(barcodeData));
            _this.scannedData = barcodeData;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AppComponent.prototype.encodedText = function () {
        var _this = this;
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(function (encodedData) {
            console.log(encodedData);
            _this.encodeData = encodedData;
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            BarcodeScanner
            //hw back button
            /*
            public modalCtrl: ModalController,
            private menu: MenuController,
            private actionSheetCtrl: ActionSheetController,
            private popoverCtrl: PopoverController,
            private router: Router,
            private toast: Toast
            */
        ])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map