import { UrlService } from './../url/url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url= UrlService.getMenuListUrl();
  private cart = [];
  private menu_list: any[];
  constructor(private http:HttpClient) {
    //this.http.get('http://192.168.100.74:8080/NomNom_Query/getMenuList.php?resto_id=1').subscribe(res => {
    //  this.menu_list = res["menuList"];
    //
    //  this.menu_list[0].open = true;
    //})
    
    this.http.post(this.url,
    {"resto_id" : 1}).subscribe(res => {
      this.menu_list = res["menuList"];

      this.menu_list[0].open = true;
    })
  }

  getMenu() {
    return this.menu_list;
  }

  getCart()
  {
    return this.cart;
  }

  addItem(item)
  {
    this.cart.push(item);
  }


}
