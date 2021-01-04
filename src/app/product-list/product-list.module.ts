import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MaterialModule } from '../material-module/material.module';

@NgModule( {
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ ProductListComponent ]
} )
export class ProductListModule { }
