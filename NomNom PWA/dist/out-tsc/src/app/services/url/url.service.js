import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService.getUrl = function () {
        return this.url;
    };
    UrlService.getMenuListUrl = function () {
        return this.url + 'getMenuList.php';
    };
    UrlService.getLoginUrl = function () {
        return this.url + 'loginCustomer.php';
    };
    UrlService.getRegUrl = function () {
        return this.url + 'registerCustomer.php';
    };
    UrlService.url = 'http://192.168.1.100/NomNom_Query/';
    UrlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UrlService);
    return UrlService;
}());
export { UrlService };
//# sourceMappingURL=url.service.js.map