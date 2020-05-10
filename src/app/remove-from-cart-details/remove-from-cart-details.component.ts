import { Component, OnInit } from '@angular/core';
import { CartDTO,SCartService } from '../s-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-from-cart-details',
  templateUrl: './remove-from-cart-details.component.html',
  styleUrls: ['./remove-from-cart-details.component.css']
})
export class RemoveFromCartDetailsComponent implements OnInit {

  userId:"";
  productId="";
  car:CartDTO[];
    data:CartDTO=new CartDTO("","",0);
    constructor(private service:SCartService,private routing:ActivatedRoute) { }
  
    ngOnInit(): void {
    }
  onDelete(userId)
  {
    console.log(userId)
    this.service.delete(this.productId,this.userId).subscribe(
      (result)=>{
        if(result!=null)
        alert("cancelled product successfully");
        else
        alert("cancelling product is failed");
      });
      }
      handleSuccessfulResponse(response)
      {
        console.log(response)
        this.data=response;
      }
  
      onSubmit(userId:string)
      {
        console.log(userId)
        return  this.service.removeFromCartDetails(userId).subscribe(
          response=>this.handleSuccessfulResponse(response),
          );
      }
    
      }
  
  
  
