import { Injectable } from '@angular/core';
import { ICart } from './i-cart';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SCartService {
  
  constructor(private http:HttpClient) { }
  cart:CartDTO

  public removeFromCartDetails(userId){
    console.log("inservice"+userId)
   const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
   return this.http.get("http://localhost:2200/Order/RemoveItemFromCartDetails/"+userId,  { headers, responseType: 'json'});
 
 }

  public addItemToCart(cart: CartDTO) {
    console.log(cart);
    return this.http.post("http://localhost:1647/Cart/AddToCart", cart);
 }
 

 delete(productId: string,userId:string) {
  console.log("ins service delete");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.delete("http://localhost:1401/Cart/RemoveItemFromCart/" + productId + "/" + userId,  { headers, responseType: 'text'});
}
}

export class CartDTO
{
  userId:string;
  productId:string;
  quantity:number;

  constructor(userId:string, productId:string, quantity:number)
  {
    this.userId=userId;
    this.productId=productId;
    this.quantity=quantity;
  }
}