import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ProductListComponent implements OnInit {

  step = 0;

  constructor () { }

  ngOnInit (): void {
  }

  setStep ( index: number ) {
    this.step = index;
  }

  nextStep () {
    this.step++;
  }

  prevStep () {
    this.step--;
  }

}
