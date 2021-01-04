import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeMessageDialog } from '../dialog/welcome-message.dialog';
import Cookies from 'js-cookie';

@Component( {
  selector: 'app-welcome',
  template: ''
} )
export class WelcomeMessageComponent implements OnInit {

  showAgain = this.checkCookies();

  constructor ( public dialog: MatDialog ) {
  }

  private checkCookies (): boolean {
    const welcomeCookie: string = Cookies.get( 'welcome' );
    const welcome: boolean = welcomeCookie === 'true';

    if ( welcomeCookie ) {
      return welcome;
    } else {
      Cookies.set( 'welcome', true, { expires: 7 } );
      return true;
    }

  }

  ngOnInit (): void {
    if ( this.showAgain === true ) {
      this.welcomeVisitor();
    }
  }

  private welcomeVisitor () {
    const welcoming = this.dialog.open( WelcomeMessageDialog, {
      data: !this.showAgain,
      disableClose: true
    } );

    welcoming.afterClosed().subscribe( result => {
      this.showAgain = !result;
      Cookies.set( 'welcome', this.showAgain, { expires: 7 } );
    } );
  }
}
