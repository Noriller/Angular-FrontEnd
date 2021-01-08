import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Datasource, IDatasource } from 'ngx-ui-scroll';
import { BehaviorSubject, from, fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductListService } from './product-list.service';

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

  constructor ( private service: ProductListService ) {
  }

  datasource = new Datasource( {
    get: ( index, count ) => this.service.getProducts( index, count )
    , settings: {
      windowViewport: true,
    }
  } );

  async ngOnInit () {
    this.setInputSubject();
    await this.resetInfiniteScroll();
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
    this.service.pattern.next( this.inputValue );
    await this.resetInfiniteScroll();
  }

  private async resetInfiniteScroll () {
    const settings = await this.scrollSettings();
    this.datasource.adapter.reset( { settings } );
  }

  private async scrollSettings () {
    this.maxSize = await this.service.getMaxSize();
    return {
      windowViewport: true,
      startIndex: Number( 0 ),
      minIndex: Number( 0 ),
      maxIndex: Number( this.maxSize ),
      // infinite: true
    };
  }
}
