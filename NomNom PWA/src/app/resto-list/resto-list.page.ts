import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-restoList',
    templateUrl: './resto-list.page.html',
    styleUrls: ['./resto-list.page.scss'],
})
export class RestoListPage implements OnInit {

    public items: any;

    public isSearchbarOpened = false;
    constructor() {
        this.items = [
            { title: 'Resto 1', id: 1 },
            { title: 'Resto 2', id: 2 },
            { title: 'Resto 3', id: 3 },
        ]

    }

    onSearch(event) {
        console.log(event.target.value)
    }
    ngOnInit() {
    }

}
