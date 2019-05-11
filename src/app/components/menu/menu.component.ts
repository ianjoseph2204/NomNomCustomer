import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input('menu') menu: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async orderMenu(menu){
    let toast = await this.toastCtrl.create({
      message: `Added to the cart: ${menu.meal_name}`
    });
    toast.present();
  }
}
