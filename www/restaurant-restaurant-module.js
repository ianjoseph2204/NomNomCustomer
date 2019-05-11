(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-restaurant-module"],{

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item class=\"menu-item\" text-wrap detail=\"false\" lines=\"none\">\n  <ion-row no-padding align-items-center>\n    <ion-col size=\"9\">\n      <ion-row no-padding>\n        <ion-col size=\"12\">\n          <h3>{{ menu.meal_name }}</h3>\n        </ion-col>\n        <ion-col size=\"12\">\n          <p text-lowercase color=\"medium\">{{ menu.description }}</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"3\"  text-right>\n      <ion-button fill=\"outline\" (click)=\"orderMenu(menu)\">Rp. {{ menu.price }}</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-item>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".child-item {\n  --ion-item-background: #f3f2f1;\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  margin-bottom: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0U6XFxVc2Vyc1xcSWFuIEpvc2VwaFxcSW9uaWNcXE5vbU5vbUN1c3RvbWVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXNCO0VBQ3RCLG9CQUFnQjtFQUNoQix3QkFBb0I7RUFDcEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlsZC1pdGVtIHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2YzZjJmMTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.orderMenu = function (menu) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "Added to the cart: " + menu.meal_name
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "menu", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/shared-components.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/menu/shared-components.module.ts ***!
  \*************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/restaurant/restaurant.module.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.module.ts ***!
  \*************************************************/
/*! exports provided: RestaurantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantPageModule", function() { return RestaurantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_menu_shared_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu/shared-components.module */ "./src/app/components/menu/shared-components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restaurant_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restaurant.page */ "./src/app/restaurant/restaurant.page.ts");








var routes = [
    {
        path: '',
        component: _restaurant_page__WEBPACK_IMPORTED_MODULE_7__["RestaurantPage"]
    }
];
var RestaurantPageModule = /** @class */ (function () {
    function RestaurantPageModule() {
    }
    RestaurantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_menu_shared_components_module__WEBPACK_IMPORTED_MODULE_1__["SharedComponentsModule"]
            ],
            declarations: [_restaurant_page__WEBPACK_IMPORTED_MODULE_7__["RestaurantPage"]]
        })
    ], RestaurantPageModule);
    return RestaurantPageModule;
}());



/***/ }),

/***/ "./src/app/restaurant/restaurant.page.html":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Restaurant</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-img src=\"https://ak7.picdn.net/shutterstock/videos/7478347/thumb/1.jpg\"></ion-img>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-label>Restaurant</ion-label>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-label>Open 10 a.m. - 10 p.m.</ion-label>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-label>Italian Food</ion-label>\n\t\t\t\t</ion-row>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<p>\n\t\t\t\tThis restaurant is a dummy, but it supposedly sells the usual Italian cuisine staples. Eat delicious pizza and other Italian dishes at 23rd I. Made This Up Avenue!\n\t\t\t</p>\n\t\t</ion-row>\n\t\t<ion-row>\n      <ion-button slot=\"end\">\n        <ion-button (click)=\"automaticClose = !automaticClose\">\n          <ion-icon slot=\"icon-only\" name=\"close\" *ngIf=\"automaticClose\"></ion-icon>\n          <ion-icon slot=\"icon-only\" name=\"resize\" *ngIf=\"automaticClose\"></ion-icon>\n        </ion-button>\n      </ion-button>\n    </ion-row>\n    \n    \n    <ion-list *ngFor=\"let item of information; let i = index;\" class=\"accordion-list\" lines=\"none\" detail=\"false\" no-padding>\n      <ion-item tappable (click)=\"toggleSection(i)\" [ngClass]=\"{'section-active': item.open , 'section': !item.open}\">\n        <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!item.open\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"item.open\"></ion-icon>\n        <ion-label>\n          {{item.type_name}}\n        </ion-label>\n      </ion-item>\n\n        <ion-list *ngIf=\"item.children && item.open\" class=\"menu-list\" lines=\"none\">\n          <app-menu [menu]=\"menu\" *ngFor=\"let menu of item.children\"></app-menu>\n        </ion-list>\n    </ion-list>  \n\t</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/restaurant/restaurant.page.scss":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/restaurant/restaurant.page.ts":
/*!***********************************************!*\
  !*** ./src/app/restaurant/restaurant.page.ts ***!
  \***********************************************/
/*! exports provided: RestaurantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantPage", function() { return RestaurantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RestaurantPage = /** @class */ (function () {
    function RestaurantPage(http) {
        var _this = this;
        this.http = http;
        this.automaticClose = false;
        this.http.get('http://localhost:8080/NomNom_Query/getMenuList.php?resto_id=1').subscribe(function (res) {
            _this.information = res["menuList"];
            _this.information[0].open = true;
        });
        //this.http.post('http://192.168.100.74:8080/NomNom_Query/getMenuList.php',
        //{"resto_id" : 1}).subscribe(res => {
        //  this.information = res["menuList"];
        //
        //  this.information[0].open = true;
        //})
    }
    RestaurantPage.prototype.ngOnInit = function () {
    };
    RestaurantPage.prototype.toggleSection = function (index) {
        this.information[index].open = !this.information[index].open;
        if (this.automaticClose && this.information[index].open) {
            this.information
                .filter(function (item, itemIndex) { return itemIndex != index; })
                .map(function (item) { return item.open = false; });
        }
    };
    RestaurantPage.prototype.toggleItem = function (index, childIndex) {
        this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
    };
    RestaurantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! ./restaurant.page.html */ "./src/app/restaurant/restaurant.page.html"),
            styles: [__webpack_require__(/*! ./restaurant.page.scss */ "./src/app/restaurant/restaurant.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestaurantPage);
    return RestaurantPage;
}());



/***/ })

}]);
//# sourceMappingURL=restaurant-restaurant-module.js.map