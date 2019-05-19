import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UrlService } from './../services/url/url.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, http) {
        this.router = router;
        this.http = http;
        this.regUrl = UrlService.getRegUrl();
        this.registerLog = [];
        this.message = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.nama = "";
        this.tel = "";
        this.alamat = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.regButton = function () {
        var _this = this;
        //alert("register successfull");
        this.http.post(this.regUrl, {
            "username": this.username,
            "password": this.password,
            "email": this.email,
            "nama": this.nama,
            "tel": this.tel,
            "alamat": this.alamat
        }).subscribe(function (res) {
            _this.registerLog = res['registerLog'];
        });
        if (this.registerLog['error'] == false) {
            this.router.navigate(['']);
        }
        else {
            this.message = this.registerLog['message'];
            alert(this.message);
        }
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpClient])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map