import { Component, OnInit } from '@angular/core';
import { IDatasource } from 'ngx-ui-scroll';
import { from } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import Product from './product';
import { ProductListService } from './product-list.service';
@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ],
} )
export class ProductListComponent implements OnInit {

  page = 0;
  step: number = null;
  productList: Product[] = [];
  maxSize: number;
  datasource: IDatasource;

  constructor ( private service: ProductListService ) {
    this.datasource = {
      get: ( index, count ) =>
        this.service.getProducts( index, count )
      , settings: {
        windowViewport: true,
        startIndex: 0,
        minIndex: 0,
        maxIndex: this.maxSize - 1,
      }
    };
  }

  async ngOnInit () {
    this.maxSize = await this.service.getMaxSize();
  }

  setStep ( index: number ) {
    this.step = index;
  }

  nextStep () {
    this.step++;
  }

  prevStep () {
    this.step--;
  }

  isFirst ( index: number ) {
    return index === 0;
  }

  isLast ( index: number ) {
    return index === ( this.productList.length - 1 );
  }

}
