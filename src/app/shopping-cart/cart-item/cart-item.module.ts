import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { MaterialModule } from '../../material-module/material.module';
import { FormsModule } from '@angular/forms';



@NgModule( {
  declarations: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ CartItemComponent ]
} )
export class CartItemModule { }
