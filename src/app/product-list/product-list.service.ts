import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './product';

@Injectable()
export class ProductListService {
  private _jsonURL = 'assets/fakeProducts.json';

  constructor ( private http: HttpClient ) {
  }

  public getJSON (): Observable<Product[]> {
    return this.http.get<Product[]>( this._jsonURL );
  }

}
