import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message.component';
import { MaterialModule } from '../material.module';

@NgModule( {
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ WelcomeMessageComponent ],
  exports: [ WelcomeMessageComponent ]
} )
export class WelcomeMessageModule { }
