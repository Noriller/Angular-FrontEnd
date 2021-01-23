import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MaterialModule } from '../material-module/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from '../services/product-service/product-list.service';
import { UiScrollModule } from 'ngx-ui-scroll';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart-service/cart.service';
@NgModule( {
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    UiScrollModule,
    FormsModule
  ],
  exports: [ ProductListComponent ],
  providers: [
    ProductListService,
    CartService
  ]
} )
export class ProductListModule { }
