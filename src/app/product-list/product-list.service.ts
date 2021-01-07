import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import Product from './product';
import { ProductListComponent } from './product-list.component';

@Injectable()
export class ProductListService {
  private _jsonURL = 'assets/fakeProducts.json';
  pattern = new BehaviorSubject( '' );

  constructor ( private http: HttpClient ) {
  }

  private getJSON (): Observable<Product[]> {
    return this.http.get<Product[]>( this._jsonURL )
      .pipe(
        map( ( res ) => {
          const searchValue = this.pattern.value;
          return res.filter( ( value ) => this.filterValue( value, searchValue ) );
        } ) );
  }

  public getMaxSize () {
    return this.getJSON()
      .toPromise()
      .then( res => res.length - 1 );
  }

  public getProducts ( currentQuantity, howMany ) {
    return this.getJSON()
      .toPromise()
      .then( res => {
        const data: Product[] = [];
        const start = currentQuantity;
        const finish = start + howMany;
        for ( let index = ( start ); index < finish; index++ ) {
          const element = res[ index ];
          data.push( element );
        }
        return data;
      } );
  }

  private filterValue ( value: Product, search: string ): boolean {
    const description = value.productDescription.toLowerCase().indexOf( search ) !== -1;
    const name = value.productName.toLowerCase().indexOf( search ) !== -1;
    const price = value.productPrice.toString().indexOf( search ) !== -1;

    return description || name || price;
  }
}
