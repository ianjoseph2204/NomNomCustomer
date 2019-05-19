import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  static url = 'http://192.168.1.100/NomNom_Query/';
  constructor() { }

  public static getUrl(){
    return this.url;
  }

  public static getMenuListUrl(){
    return this.url + 'getMenuList.php';
  }

  public static getLoginUrl(){
    return this.url + 'loginCustomer.php';
  }

  public static getRegUrl(){
    return this.url + 'registerCustomer.php';
  }
}
