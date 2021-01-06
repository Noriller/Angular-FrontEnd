import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import Product from './product';
import { ProductListService } from './product-list.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class ProductListComponent implements OnInit {

  step: number = null;
  totalList: Product[];
  productList: Product[];

  constructor ( private service: ProductListService ) {
  }

  ngOnInit (): void {
    this.service.getJSON().subscribe( res => {
      this.totalList = res;
      this.productList = this.totalList.slice( 0, 30 );
    } );
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

  onScrollDown () {
    const len = this.productList.length;
    this.productList = this.totalList.slice( 0, len + 10 );
  }

}
