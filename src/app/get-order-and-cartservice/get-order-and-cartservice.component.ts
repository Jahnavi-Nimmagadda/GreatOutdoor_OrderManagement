import { Component, OnInit } from '@angular/core';
import { OrderDTO, SOrderService } from '../s-order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-order-and-cartservice',
  templateUrl: './get-order-and-cartservice.component.html',
  styleUrls: ['./get-order-and-cartservice.component.css']
})
export class GetOrderAndCartserviceComponent implements OnInit {
  userId="";
  getord:OrderDTO[];
  status:boolean;
  valid :any;
  constructor(private orderservice:SOrderService,private router:Router) { this.status=false; }

  ngOnInit(): void{}

    submit(userId:string){
      console.log("ts"+userId)
     this.orderservice.getOrderAndService(userId).subscribe(
      response=>  this.handleSuccessfulResponse(response),
      );
      }
      
      handleSuccessfulResponse(response)
      {
        console.log(response)
        this.status=true;
        this.getord=response;
       //console.log(this.getord)
      }
  
  }


