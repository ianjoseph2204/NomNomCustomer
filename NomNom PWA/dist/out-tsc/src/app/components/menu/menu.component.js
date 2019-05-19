import * as tslib_1 from "tslib";
import { CartService } from './../../services/cart/cart.service';
import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(toastCtrl, cartService) {
        this.toastCtrl = toastCtrl;
        this.cartService = cartService;
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.orderMenu = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "Added to the cart: " + item.meal_name,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.cartService.addItem(item);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input('menu'),
        tslib_1.__metadata("design:type", Object)
    ], MenuComponent.prototype, "menu", void 0);
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController, CartService])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map