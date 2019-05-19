import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var RestoListPage = /** @class */ (function () {
    function RestoListPage() {
        this.isSearchbarOpened = false;
        this.items = [
            { title: 'Resto 1', id: 1 },
            { title: 'Resto 2', id: 2 },
            { title: 'Resto 3', id: 3 },
        ];
    }
    RestoListPage.prototype.onSearch = function (event) {
        console.log(event.target.value);
    };
    RestoListPage.prototype.ngOnInit = function () {
    };
    RestoListPage = tslib_1.__decorate([
        Component({
            selector: 'app-restoList',
            templateUrl: './resto-list.page.html',
            styleUrls: ['./resto-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RestoListPage);
    return RestoListPage;
}());
export { RestoListPage };
//# sourceMappingURL=resto-list.page.js.map