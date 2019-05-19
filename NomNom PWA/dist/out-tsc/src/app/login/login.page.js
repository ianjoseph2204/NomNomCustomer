import * as tslib_1 from "tslib";
import { UrlService } from './../services/url/url.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, http) {
        this.router = router;
        this.http = http;
        this.loginUrl = UrlService.getLoginUrl();
        this.loginLog = [];
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.http.post(this.loginUrl, {
            "username": this.username,
            "password": this.password
        }).subscribe(function (res) {
            _this.loginLog = res["loginLog"];
        });
        if (this.loginLog['error'] == false) {
            this.router.navigate(['home']);
        }
        else if (this.loginLog['error'] == true) {
            alert("Wrong Username or Password!");
        }
    };
    LoginPage.prototype.registerButton = function () {
        this.router.navigate(['register']);
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpClient])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map