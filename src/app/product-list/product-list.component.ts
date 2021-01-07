import { Component, OnInit } from '@angular/core';
import { Datasource, IDatasource } from 'ngx-ui-scroll';
import { ProductListService } from './product-list.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ],
} )
export class ProductListComponent implements OnInit {

  step: number = null;
  maxSize: number;
  datasource: IDatasource;

  constructor ( private service: ProductListService ) {
    this.datasource = new Datasource( {
      get: ( index, count ) => this.service.getProducts( index, count )
      , settings: {
        windowViewport: true,
        infinite: true
      }
    } );
  }

  async ngOnInit () {
    this.maxSize = await this.service.getMaxSize();
    const scrollSettings = {
      windowViewport: true,
      startIndex: Number( 0 ),
      minIndex: Number( 0 ),
      maxIndex: Number( this.maxSize ),
      infinite: true
    };
    this.datasource.adapter.reset( { settings: scrollSettings } );
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
    return index === this.maxSize;
  }

}
