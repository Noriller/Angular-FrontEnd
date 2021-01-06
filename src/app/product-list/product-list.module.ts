import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MaterialModule } from '../material-module/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from './product-list.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule( {
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ScrollingModule,
    InfiniteScrollModule
  ],
  exports: [ ProductListComponent ],
  providers: [ ProductListService ]
} )
export class ProductListModule { }
