import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material.module';
import { ProductListModule } from './product-list/product-list.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { WelcomeMessageModule } from './welcome-message/welcome-message.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { AppRoutingModule } from './app-routing-module.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TopBarModule,
    MaterialModule,
    WelcomeMessageModule,
    ProductListModule,
    ShoppingCartModule,
    NotFoundPageModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
