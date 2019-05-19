import * as tslib_1 from "tslib";
import { CartService } from './../services/cart/cart.service';
import { Component } from '@angular/core';
var CartPage = /** @class */ (function () {
    function CartPage(cartService) {
        this.cartService = cartService;
        this.selectedItems = [];
        this.total = 0;
    }
    CartPage.prototype.ngOnInit = function () {
        var items = this.cartService.getCart();
        var selected = {};
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            if (selected[obj.meal_id]) {
                selected[obj.meal_id].count++;
            }
            else {
                selected[obj.meal_id] = tslib_1.__assign({}, obj, { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (key) { return selected[key]; });
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    CartPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart.page.html',
            styleUrls: ['./cart.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartService])
    ], CartPage);
    return CartPage;
}());
export { CartPage };
//# sourceMappingURL=cart.page.js.map