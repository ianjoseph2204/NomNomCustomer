import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
var GenerateQrPage = /** @class */ (function () {
    function GenerateQrPage(platform, splashScreen, statusBar, scanner) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.scanner = scanner;
        this.encodText = '';
        this.encodedData = {};
        this.scannedData = {};
    }
    GenerateQrPage.prototype.ngOnInit = function () {
    };
    GenerateQrPage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: 'Scan your barcode'
        };
        this.scanner.scan(this.options).then(function (data) {
            _this.scannedData = data;
        }), function (err) {
            console.log('Error: ', err);
        };
    };
    GenerateQrPage.prototype.encode = function () {
        var _this = this;
        this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then(function (data) {
            _this.encodedData = data;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    GenerateQrPage = tslib_1.__decorate([
        Component({
            selector: 'app-generate-qr',
            templateUrl: './generate-qr.page.html',
            styleUrls: ['./generate-qr.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            BarcodeScanner])
    ], GenerateQrPage);
    return GenerateQrPage;
}());
export { GenerateQrPage };
//# sourceMappingURL=generate-qr.page.js.map