import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageDialog } from './dialog/welcome-message.dialog';
import { MaterialModule } from '../material-module/material.module';
import { FormsModule } from '@angular/forms';
import { WelcomeMessageComponent } from './component/welcome-message.component';

@NgModule( {
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    WelcomeMessageDialog,
    WelcomeMessageComponent
  ],
  exports: [ WelcomeMessageComponent ]
} )
export class WelcomeMessageModule { }
