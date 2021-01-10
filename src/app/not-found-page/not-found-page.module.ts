import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { MaterialModule } from '../material-module/material.module';



@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
