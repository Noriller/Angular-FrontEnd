import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { MaterialModule } from '../material.module';

@NgModule( {
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ TopBarComponent ],
  exports: [ TopBarComponent ]
} )
export class TopBarModule { }
