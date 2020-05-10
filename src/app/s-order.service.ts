import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SOrderService {
  
  constructor(private http:HttpClient) { }
  order:OrderDTO;

  public getOrderAndService(userId){
    console.log("inservice"+userId)
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get("http://localhost:4321/order/GetOrderAndCartService/"+userId,  { headers, responseType: 'json'});

}
  

}

export class OrderDTO
{
  orderId:string;
  userId:string;
  addressId:string;
  orderDispatchStatus:string;
  orderInitiateTime:Date;
  orderDispatchTime:Date;

  constructor(orderId:string, userId:string, addressId:string, orderDispatchStatus:string, orderInitiateTime:Date,orderDispatchTime:Date)
  {
      this.orderId=orderId
    this.userId=userId;
    this.addressId=addressId;
    this.orderDispatchStatus=orderDispatchStatus;
    this.orderInitiateTime=orderInitiateTime;
    this.orderDispatchTime=orderDispatchTime;
  
  }
}