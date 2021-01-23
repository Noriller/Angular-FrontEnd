import { Component, ElementRef, HostListener, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart-service/cart.service';
import Product from '../services/product';
import { ProductListService } from '../services/product-service/product-list.service';

@Component( {
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.css' ],
} )
export class ShoppingCartComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myCartItems: Product[] = [];

  @ViewChild( 'floater' ) floater: ElementRef;

  constructor (
    private formBuilder: FormBuilder,
    private cart: CartService
  ) { }

  ngOnDestroy (): void {
    // Remove all 0 quantity items
  }

  async ngOnInit (): Promise<void> {
    this.firstFormGroup = this.formBuilder.group( {
    } );
    this.secondFormGroup = this.formBuilder.group( {
      firstCtrl: [ '', Validators.required ],
      secondCtrl: [ '', Validators.required ]
    } );

    this.myCartItems = await this.cart.getItems();
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
    const fromTop = 150;
    const top = winScrollTop + fromTop;
    floater.style.top = top + 'px';
  }
}
