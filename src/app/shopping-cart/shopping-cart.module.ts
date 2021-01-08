import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart.component';



@NgModule( {
  declarations: [ ShoppingCartComponent ],
  imports: [
    CommonModule
  ],
  exports: [ ShoppingCartComponent ]
} )
export class ShoppingCartModule { }
