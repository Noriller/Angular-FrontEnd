import { Component, Input } from '@angular/core';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

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

  name = 'name';
  price = 10;
  image = "https://material.angular.io/assets/img/examples/shiba1.jpg";

  description = `The Shiba Inu is the smallest of the six original and distinct spitz
  breeds of dog from Japan. A small, agile dog that copes very well with
  mountainous terrain, the Shiba Inu was originally bred for hunting.`;

  quantity = 1;
  collapsed = true;

  constructor () { }

}
