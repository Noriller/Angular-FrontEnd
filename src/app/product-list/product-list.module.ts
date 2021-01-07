import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MaterialModule } from '../material-module/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from './product-list.service';
import { UiScrollModule } from 'ngx-ui-scroll';
@NgModule( {
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    UiScrollModule
  ],
  exports: [ ProductListComponent ],
  providers: [ ProductListService ]
} )
export class ProductListModule { }
