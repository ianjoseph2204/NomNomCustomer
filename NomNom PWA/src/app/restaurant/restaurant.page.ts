import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  menu_list: any[];
  automaticClose = false;
  cart = []
  constructor( private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.menu_list = this.cartService.getMenu();
    this.cart = this.cartService.getCart();
  }

  openCart()
  {
    this.router.navigate(['cart']);
  }

  toggleSection(index){
    this.menu_list[index].open = !this.menu_list[index].open;

    if(this.automaticClose && this.menu_list[index].open){
      this.menu_list
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex){
    this.menu_list[index].children[childIndex].open = !this.menu_list[index].children[childIndex].open;
  }
}
