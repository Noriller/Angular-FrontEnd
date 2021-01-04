import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { WelcomeMessageModule } from './welcome-message/welcome-message.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TopBarModule,
    MaterialModule,
    WelcomeMessageModule,
    ProductListModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
