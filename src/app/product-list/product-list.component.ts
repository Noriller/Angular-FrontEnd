import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './product';
import { ProductListService } from './product-list.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ],
} )
export class ProductListComponent implements OnInit {

  step = 0;
  productList: Observable<Product[]>;

  constructor ( private service: ProductListService ) {
    this.productList = this.service.getJSON();
  }

  ngOnInit (): void {
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

}
