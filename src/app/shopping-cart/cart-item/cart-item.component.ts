import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { ProductListService } from 'src/app/services/product-service/product-list.service';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 0,
  hideDelay: 2000,
  touchendHideDelay: 2000,
  position: 'below'
};

@Component( {
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: [ './cart-item.component.css' ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ],
} )
export class CartItemComponent {

  @Input()
  id: string;
  @Input()
  name: string;
  @Input()
  price: number;
  @Input()
  image: string;
  @Input()
  description: string;

  @Input()
  quantity = 1;

  @Output()
  quantityChange = new EventEmitter<number>();

  collapsed = true;

  constructor (
    private cart: CartService,
    private productList: ProductListService
  ) { }

  onQuantityChange (): void {
    this.quantityChange.emit( this.quantity );
  }

  async removeProduct ( id: string ) {
    this.cart.removeFromCart( id );
  }

}
