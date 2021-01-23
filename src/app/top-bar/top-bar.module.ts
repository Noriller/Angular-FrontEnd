import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { MaterialModule } from '../material-module/material.module';
import { AppRoutingModule } from '../app-routing-module.module';

@NgModule( {
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [ TopBarComponent ],
  exports: [ TopBarComponent ]
} )
export class TopBarModule { }
