import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component( {
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.dialog.html',
  styleUrls: [ './welcome-message.dialog.css' ]
} )
export class WelcomeMessageDialog implements OnInit {

  constructor (
    public dialogRef: MatDialogRef<WelcomeMessageDialog>,
    @Inject( MAT_DIALOG_DATA ) public data: boolean
  ) { }

  ngOnInit () {
  }

}
