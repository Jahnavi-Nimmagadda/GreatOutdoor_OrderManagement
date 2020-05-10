import { Injectable } from '@angular/core';
import { ICart } from './i-cart';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SOrderProductMapService {
  
  constructor(private http:HttpClient) { }
 orderproduct:OrderProductMapDTO;

 public getDeletOrderProductDetails(orderId){
   console.log("inservice"+orderId)
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.get("http://localhost:2243/Order/DeleteOrderProductMapEntityDetails/"+orderId,  { headers, responseType: 'json'});

}
 delete(orderId: string) {
  console.log("ins service delete"+orderId);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.delete("http://localhost:1657/order/DeleteOrderProductMapEntity/" + orderId,  { headers, responseType: 'text'});
}
  

}

export class OrderProductMapDTO
{
  orderId:string;
  productId:string;
  ProductUIN:string;
  productStatus:number;
  giftStatus:number;

  constructor(orderId:string, productId:string, ProductUIN:string, productStatus:number,giftStatus:number)
  {
      this.orderId=orderId
    this.productId=productId;
    this.ProductUIN=ProductUIN;
    this.productStatus=productStatus;
    this.giftStatus=giftStatus;
  }
}