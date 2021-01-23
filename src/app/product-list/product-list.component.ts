import { Component, OnInit } from '@angular/core';
import { Datasource } from 'ngx-ui-scroll';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CartService } from '../services/cart-service/cart.service';
import { ProductListService } from '../services/product-service/product-list.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ],
} )
export class ProductListComponent implements OnInit {

  step: number = null;
  maxSize: number;
  subject = new Subject();
  inputValue = '';

  constructor (
    private productList: ProductListService,
    private cart: CartService
  ) { }

  datasource = new Datasource( {
    get: ( index, count ) => this.productList.getProducts( index, count )
    , settings: {
      windowViewport: true,
    }
  } );

  async ngOnInit () {
    this.setInputSubject();
    await this.resetInfiniteScroll();
  }

  async addToCart ( id: string ) {
    this.cart.addToCart( id );
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

  hasElements () {
    return this.maxSize ? this.maxSize > 0 : true;
  }

  clearSearch () {
    this.inputValue = '';
    this.subject.next();
  }

  search ( ev ) {
    const searchText = ev;
    this.subject.next( searchText );
  }

  private setInputSubject () {
    this.subject.pipe(
      debounceTime( 500 ),
      distinctUntilChanged()
    ).subscribe( () => this.searchValue() );
  }

  private async searchValue () {
    this.productList.pattern.next( this.inputValue );
    await this.resetInfiniteScroll();
  }

  private async resetInfiniteScroll () {
    const settings = await this.scrollSettings();
    this.datasource.adapter.reset( { settings } );
  }

  private async scrollSettings () {
    this.maxSize = await this.productList.getMaxSize();
    return {
      windowViewport: true,
      startIndex: Number( 0 ),
      minIndex: Number( 0 ),
      maxIndex: Number( this.maxSize ),
      // infinite: true
    };
  }
}
