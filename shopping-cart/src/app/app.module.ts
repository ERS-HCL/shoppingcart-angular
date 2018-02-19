import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ShoppingcartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
