import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    
    IonicModule,
    CommonModule
  ],
  exports: [MenuComponent]
})
export class SharedComponentsModule { }
