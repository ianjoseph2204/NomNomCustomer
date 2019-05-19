import * as tslib_1 from "tslib";
import { UrlService } from './../url/url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CartService = /** @class */ (function () {
    function CartService(http) {
        //this.http.get('http://192.168.100.74:8080/NomNom_Query/getMenuList.php?resto_id=1').subscribe(res => {
        //  this.menu_list = res["menuList"];
        //
        //  this.menu_list[0].open = true;
        //})
        var _this = this;
        this.http = http;
        this.url = UrlService.getMenuListUrl();
        this.cart = [];
        this.http.post(this.url, { "resto_id": 1 }).subscribe(function (res) {
            _this.menu_list = res["menuList"];
            _this.menu_list[0].open = true;
        });
    }
    CartService.prototype.getMenu = function () {
        return this.menu_list;
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.addItem = function (item) {
        this.cart.push(item);
    };
    CartService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map