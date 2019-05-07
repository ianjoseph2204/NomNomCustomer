(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-qr-generate-qr-module"],{

/***/ "./src/app/generate-qr/generate-qr.module.ts":
/*!***************************************************!*\
  !*** ./src/app/generate-qr/generate-qr.module.ts ***!
  \***************************************************/
/*! exports provided: GenerateQrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateQrPageModule", function() { return GenerateQrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generate_qr_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-qr.page */ "./src/app/generate-qr/generate-qr.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");











var routes = [
    {
        path: '',
        component: _generate_qr_page__WEBPACK_IMPORTED_MODULE_5__["GenerateQrPage"]
    }
];
var GenerateQrPageModule = /** @class */ (function () {
    function GenerateQrPageModule() {
    }
    GenerateQrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_generate_qr_page__WEBPACK_IMPORTED_MODULE_5__["GenerateQrPage"]],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
                _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["BarcodeScanner"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] }
            ],
            bootstrap: [_generate_qr_page__WEBPACK_IMPORTED_MODULE_5__["GenerateQrPage"]]
        })
    ], GenerateQrPageModule);
    return GenerateQrPageModule;
}());



/***/ }),

/***/ "./src/app/generate-qr/generate-qr.page.html":
/*!***************************************************!*\
  !*** ./src/app/generate-qr/generate-qr.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Generate QR Code</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div>\r\n        <ion-input style=\"background-color: gray\" type=\"text\" [(ngModel)]=\"encodText\"></ion-input>\r\n\r\n        <ion-button block (click)=\"encode()\"> Encode</ion-button>\r\n\r\n    </div>\r\n    <div>\r\n\r\n        <ion-button block (click)=\"scan()\"> Scan</ion-button>\r\n\r\n        <div *ngIf=\"scannedData.text\">\r\n            <label>Your Barcode is</label>\r\n            <br>\r\n            <span>{{scannedData.text}}</span>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/generate-qr/generate-qr.page.scss":
/*!***************************************************!*\
  !*** ./src/app/generate-qr/generate-qr.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlLXFyL2dlbmVyYXRlLXFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/generate-qr/generate-qr.page.ts":
/*!*************************************************!*\
  !*** ./src/app/generate-qr/generate-qr.page.ts ***!
  \*************************************************/
/*! exports provided: GenerateQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateQrPage", function() { return GenerateQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");






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
    GenerateQrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-qr',
            template: __webpack_require__(/*! ./generate-qr.page.html */ "./src/app/generate-qr/generate-qr.page.html"),
            styles: [__webpack_require__(/*! ./generate-qr.page.scss */ "./src/app/generate-qr/generate-qr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]])
    ], GenerateQrPage);
    return GenerateQrPage;
}());



/***/ })

}]);
//# sourceMappingURL=generate-qr-generate-qr-module.js.map