import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductListService {
  private _jsonURL = 'assets/fakeProducts.json';

  constructor ( private http: HttpClient ) {
  }

  public getJSON (): Observable<Product[]> {
    return this.http.get<Product[]>( this._jsonURL );
  }
}
