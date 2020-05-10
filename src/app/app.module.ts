import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AddItemToCartComponent } from './add-item-to-cart/add-item-to-cart.component';
import { RemoveItemFromCartComponent } from './remove-item-from-cart/remove-item-from-cart.component';
import { DeleteOrderProductMapentityComponent } from './delete-order-product-mapentity/delete-order-product-mapentity.component';
import { GetOrderAndCartserviceComponent } from './get-order-and-cartservice/get-order-and-cartservice.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DeleteOrderDetailsComponent } from './delete-order-details/delete-order-details.component';
import { RemoveFromCartDetailsComponent } from './remove-from-cart-details/remove-from-cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemToCartComponent,
    RemoveItemFromCartComponent,
    DeleteOrderProductMapentityComponent,
    GetOrderAndCartserviceComponent,
    DeleteOrderDetailsComponent,
    RemoveFromCartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
