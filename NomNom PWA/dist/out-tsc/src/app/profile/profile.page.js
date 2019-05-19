import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Component } from '@angular/core';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(router) {
        this.router = router;
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map