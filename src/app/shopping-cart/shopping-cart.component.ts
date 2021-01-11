import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Product from '../product-list/product';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.css' ],
})
export class ShoppingCartComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myCartItems: Product[];

  constructor ( private formBuilder: FormBuilder, private service: ProductListService ) { }

  async ngOnInit () {
    this.firstFormGroup = this.formBuilder.group( {
    } );
    this.secondFormGroup = this.formBuilder.group( {
      firstCtrl: [ '', Validators.required ],
      secondCtrl: [ '', Validators.required ]
    } );

    this.myCartItems = await this.service.getProducts( 0, 10 );
  }

}
