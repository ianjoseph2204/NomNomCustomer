(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Home\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t<ion-card class=\"welcome-card\" routerLink=\"/help\" routerDirection=\"forward\">\r\n\r\n      <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n\r\n      <ion-card-header>\r\n      \t<ion-card-subtitle>Getting Started</ion-card-subtitle>\r\n        <ion-card-title>Need Help?</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <p>Follow a tour of the app and learn how to enhance your experience with NomNom</p>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <ion-card routerLink=\"/resto-list\" routerDirection=\"forward\">\r\n\r\n      <ion-img src=\"/assets/RestoInt.jpg\"></ion-img>\r\n\r\n      <ion-card-header>\r\n        <ion-card-title>Find a Restaurant</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <p>Find a restaurant, take a seat, and order your meal now!</p>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <ion-card routerLink=\"/generate-qr\" routerDirection=\"forward\">\r\n\r\n      <ion-img src=\"/assets/WinTable.jpg\"></ion-img>\r\n\r\n      <ion-card-header>\r\n        <ion-card-title>Get Seated</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <p>Generate a QR code to confirm your table and begin your dining experience!</p>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <ion-list lines=\"none\">\r\n\r\n      <ion-list-header>\r\n        <ion-label>Other Things to Do</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"person-add\"></ion-icon>\r\n        <ion-label>Find Friends</ion-label>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"help-circle-outline\"></ion-icon>\r\n        <ion-label>About Us</ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9FOlxcVXNlcnNcXElhbiBKb3NlcGhcXElvbmljXFxOb21Ob20vc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
    }
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        })
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map