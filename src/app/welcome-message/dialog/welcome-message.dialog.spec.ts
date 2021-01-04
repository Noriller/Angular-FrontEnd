import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMessageDialog } from './welcome-message.dialog';

describe( 'WelcomeMessageComponent', () => {
  let component: WelcomeMessageDialog;
  let fixture: ComponentFixture<WelcomeMessageDialog>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ WelcomeMessageDialog ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( WelcomeMessageDialog );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should be created', () => {
    expect( component ).toBeTruthy();
  } );
} );
