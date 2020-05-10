import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddItemToCartComponent} from './add-item-to-cart/add-item-to-cart.component';
import { DeleteOrderProductMapentityComponent } from './delete-order-product-mapentity/delete-order-product-mapentity.component';
import { RemoveItemFromCartComponent } from './remove-item-from-cart/remove-item-from-cart.component';
import { GetOrderAndCartserviceComponent } from './get-order-and-cartservice/get-order-and-cartservice.component';
import {DeleteOrderDetailsComponent} from './delete-order-details/delete-order-details.component';
import {RemoveFromCartDetailsComponent} from './remove-from-cart-details/remove-from-cart-details.component';

const routes: Routes = [
  {
    path:'AddItemToCart',
    component:AddItemToCartComponent
  },
  {
    path:'DeleteOrderProductMapentity',
    component:DeleteOrderProductMapentityComponent
  },
  {
    path:'RemoveItemFromCart',
    component:RemoveItemFromCartComponent
  },
  {
    path:'GetOrderAndCartService',
    component:GetOrderAndCartserviceComponent
  },
  {
    path:'app-delete-order-details',
    component:DeleteOrderDetailsComponent
  },
  {
    path:'app-remove-from-cart-details',
    component:RemoveFromCartDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
