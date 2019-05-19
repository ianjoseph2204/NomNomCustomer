import * as tslib_1 from "tslib";
import { CartService } from './../services/cart/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var RestaurantPage = /** @class */ (function () {
    function RestaurantPage(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.automaticClose = false;
        this.cart = [];
    }
    RestaurantPage.prototype.ngOnInit = function () {
        this.menu_list = this.cartService.getMenu();
        this.cart = this.cartService.getCart();
    };
    RestaurantPage.prototype.openCart = function () {
        this.router.navigate(['cart']);
    };
    RestaurantPage.prototype.toggleSection = function (index) {
        this.menu_list[index].open = !this.menu_list[index].open;
        if (this.automaticClose && this.menu_list[index].open) {
            this.menu_list
                .filter(function (item, itemIndex) { return itemIndex != index; })
                .map(function (item) { return item.open = false; });
        }
    };
    RestaurantPage.prototype.toggleItem = function (index, childIndex) {
        this.menu_list[index].children[childIndex].open = !this.menu_list[index].children[childIndex].open;
    };
    RestaurantPage = tslib_1.__decorate([
        Component({
            selector: 'app-restaurant',
            templateUrl: './restaurant.page.html',
            styleUrls: ['./restaurant.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, CartService])
    ], RestaurantPage);
    return RestaurantPage;
}());
export { RestaurantPage };
//# sourceMappingURL=restaurant.page.js.map