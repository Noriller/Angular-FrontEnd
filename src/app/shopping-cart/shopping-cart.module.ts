import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module/material.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartItemModule } from './cart-item/cart-item.module';



@NgModule( {
  declarations: [ ShoppingCartComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CartItemModule
  ],
  exports: [ ShoppingCartComponent ]
} )
export class ShoppingCartModule { }
