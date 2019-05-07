(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resto-list-resto-list-module"],{

/***/ "./src/app/resto-list/resto-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/resto-list/resto-list.module.ts ***!
  \*************************************************/
/*! exports provided: RestoListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoListPageModule", function() { return RestoListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resto_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resto-list.page */ "./src/app/resto-list/resto-list.page.ts");







var routes = [
    {
        path: '',
        component: _resto_list_page__WEBPACK_IMPORTED_MODULE_6__["RestoListPage"]
    }
];
var RestoListPageModule = /** @class */ (function () {
    function RestoListPageModule() {
    }
    RestoListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resto_list_page__WEBPACK_IMPORTED_MODULE_6__["RestoListPage"]]
        })
    ], RestoListPageModule);
    return RestoListPageModule;
}());



/***/ }),

/***/ "./src/app/resto-list/resto-list.page.html":
/*!*************************************************!*\
  !*** ./src/app/resto-list/resto-list.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n    \tRestaurants\r\n\t</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<ion-list lines=\"full\">\r\n\r\n  \t\t\t<ion-item routerLink=\"/resto1\" routerDirection=\"forward\" detail>\r\n       \t\t\t<ion-label>resto1</ion-label>\r\n      \t\t</ion-item>\r\n\r\n      \t\t<ion-item routerLink=\"/resto1\" routerDirection=\"forward\" detail>\r\n       \t\t\t<ion-label>resto2</ion-label>\r\n      \t\t</ion-item>\r\n\r\n  \t\t</ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/resto-list/resto-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/resto-list/resto-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RvLWxpc3QvcmVzdG8tbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resto-list/resto-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/resto-list/resto-list.page.ts ***!
  \***********************************************/
/*! exports provided: RestoListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoListPage", function() { return RestoListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestoListPage = /** @class */ (function () {
    function RestoListPage() {
    }
    RestoListPage.prototype.ngOnInit = function () {
    };
    RestoListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resto-list',
            template: __webpack_require__(/*! ./resto-list.page.html */ "./src/app/resto-list/resto-list.page.html"),
            styles: [__webpack_require__(/*! ./resto-list.page.scss */ "./src/app/resto-list/resto-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestoListPage);
    return RestoListPage;
}());



/***/ })

}]);
//# sourceMappingURL=resto-list-resto-list-module.js.map