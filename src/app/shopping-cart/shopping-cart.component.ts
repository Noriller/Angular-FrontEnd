import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Product from '../product-list/product';
import { ProductListService } from '../product-list/product-list.service';

@Component( {
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.css' ],
} )
export class ShoppingCartComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myCartItems: Product[] = [];

  @ViewChild( 'floater' ) floater: ElementRef;

  constructor ( private formBuilder: FormBuilder, private service: ProductListService ) { }

  async ngOnInit (): Promise<void> {
    this.firstFormGroup = this.formBuilder.group( {
    } );
    this.secondFormGroup = this.formBuilder.group( {
      firstCtrl: [ '', Validators.required ],
      secondCtrl: [ '', Validators.required ]
    } );

    this.service.getProducts( 0, 10 )
      .then( res => res.map( item => {
        item.quantity = Math.floor( Math.random() * 11 );
        this.myCartItems.push( item );
      } ) );
  }

  totalGetter (): { totalValue: number, totalItems: number; } {
    let totalValue = 0;
    let totalItems = 0;
    this.myCartItems?.forEach( item => {
      totalValue += item.productPrice * item.quantity;
      totalItems += item.quantity;
    } );

    return { totalValue, totalItems };
  }

  @HostListener( 'window:scroll', [ '$event' ] ) onScrollEvent ( $event ): void {
    const floater = this.floater.nativeElement;
    const window = $event.path[ 1 ];

    const winScrollTop = window.scrollY;
    // const winHeight = window.innerHeight;
    // const floaterHeight = floater.offsetHeight;
    const fromTop = 100;
    const top = winScrollTop + fromTop;
    floater.style.top = top + 'px';
  }
}
