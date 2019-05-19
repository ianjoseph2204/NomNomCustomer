import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input('menu') menu: any;

  constructor(private toastCtrl: ToastController, private cartService: CartService) { }

  ngOnInit() {}

  async orderMenu(item){
    let toast = await this.toastCtrl.create({
      message: `Added to the cart: ${item.meal_name}`,
      duration: 2000
    });
    toast.present();
    this.cartService.addItem(item);
  }
}
