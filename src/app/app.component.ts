import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor ( public dialog: MatDialog ) { }

  ngOnInit (): void {
    this.dialog.open( WelcomeMessageComponent );
  }

}
