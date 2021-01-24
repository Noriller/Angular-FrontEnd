import { Injectable } from '@angular/core';
import Product from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductListService } from '../product-service/product-list.service';

@Injectable()
export class CartService {

  items: Product[] = [];

  constructor (
    private product: ProductListService
  ) { }

  async addToCart ( id: string ) {
    const index = this.getIndex( id );
    if ( index !== -1 ) {
      this.items[ index ].quantity += 1;
    } else {
      const product = await this.product.getProductById( id );
      product.quantity = 1;
      this.items.push( product );
    }
  }

  async getItems () {
    return this.items;
  }

  async removeFromCart ( id: string ) {
    const index = this.getIndex( id );
    if ( index !== -1 ) {
      this.items.splice( index, 1 );
    }
  }

  async cleanCartByQuantity () {
    const toClean = [];
    this.items.forEach( p => {
      if ( p.quantity === 0 ) {
        toClean.push( p.id );
      }
    } );

    toClean.forEach( id => this.removeFromCart( id ) );
  }

  private getIndex ( id: string ) {
    return this.items.findIndex( p => p.id === id );
  }
}
