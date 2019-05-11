import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  information: any[];
  
  automaticClose = false;
  
  constructor(private http:HttpClient) {
   
    this.http.get('http://localhost:8080/NomNom_Query/getMenuList.php?resto_id=1').subscribe(res => {
      this.information = res["menuList"];

      this.information[0].open = true;
    })
    
    //this.http.post('http://192.168.100.74:8080/NomNom_Query/getMenuList.php',
    //{"resto_id" : 1}).subscribe(res => {
    //  this.information = res["menuList"];
//
    //  this.information[0].open = true;
    //})
   }

  ngOnInit() {
  }

  toggleSection(index){
    this.information[index].open = !this.information[index].open;

    if(this.automaticClose && this.information[index].open){
      this.information
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex){
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }
}
