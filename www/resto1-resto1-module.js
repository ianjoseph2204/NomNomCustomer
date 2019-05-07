(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resto1-resto1-module"],{

/***/ "./src/app/resto1/resto1.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resto1/resto1.module.ts ***!
  \*****************************************/
/*! exports provided: Resto1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resto1PageModule", function() { return Resto1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resto1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resto1.page */ "./src/app/resto1/resto1.page.ts");







var routes = [
    {
        path: '',
        component: _resto1_page__WEBPACK_IMPORTED_MODULE_6__["Resto1Page"]
    }
];
var Resto1PageModule = /** @class */ (function () {
    function Resto1PageModule() {
    }
    Resto1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resto1_page__WEBPACK_IMPORTED_MODULE_6__["Resto1Page"]]
        })
    ], Resto1PageModule);
    return Resto1PageModule;
}());



/***/ }),

/***/ "./src/app/resto1/resto1.page.html":
/*!*****************************************!*\
  !*** ./src/app/resto1/resto1.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Restaurant</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-img src=\"https://ak7.picdn.net/shutterstock/videos/7478347/thumb/1.jpg\"></ion-img>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-label>Restaurant</ion-label>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-label>Open 10 a.m. - 10 p.m.</ion-label>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-label>Italian Food</ion-label>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<p>\r\n\t\t\t\tThis restaurant is a dummy, but it supposedly sells the usual Italian cuisine staples. Eat delicious pizza and other Italian dishes at 23rd I. Made This Up Avenue!\r\n\t\t\t</p>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-button color=\"primary\" expand=\"full\">Menu</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-button color=\"secondary\" expand=\"full\">Directions</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/resto1/resto1.page.scss":
/*!*****************************************!*\
  !*** ./src/app/resto1/resto1.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RvMS9yZXN0bzEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/resto1/resto1.page.ts":
/*!***************************************!*\
  !*** ./src/app/resto1/resto1.page.ts ***!
  \***************************************/
/*! exports provided: Resto1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resto1Page", function() { return Resto1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Resto1Page = /** @class */ (function () {
    function Resto1Page() {
    }
    Resto1Page.prototype.ngOnInit = function () {
    };
    Resto1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resto1',
            template: __webpack_require__(/*! ./resto1.page.html */ "./src/app/resto1/resto1.page.html"),
            styles: [__webpack_require__(/*! ./resto1.page.scss */ "./src/app/resto1/resto1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Resto1Page);
    return Resto1Page;
}());



/***/ })

}]);
//# sourceMappingURL=resto1-resto1-module.js.map