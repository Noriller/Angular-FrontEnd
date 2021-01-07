import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './product';

@Injectable()
export class ProductListService {
  private _jsonURL = 'assets/fakeProducts.json';

  constructor ( private http: HttpClient ) {
  }

  private getJSON (): Observable<Product[]> {
    return this.http.get<Product[]>( this._jsonURL );
  }

  public getMaxSize () {
    return this.getJSON()
      .toPromise()
      .then( res => res.length );
  }

  // public getPages ( page, pageSize = 10 ) {
  //   console.log( page, pageSize );
  //   return this.getJSON()
  //     .toPromise()
  //     .then( res => {
  //       const data: Product[] = [];
  //       const start = page * pageSize;
  //       const finish = start + pageSize;
  //       for ( let index = ( start ); index < finish; index++ ) {
  //         const element = res[ index ];
  //         data.push( element );
  //       }
  //       return data;
  //     } );
  // }
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

}
