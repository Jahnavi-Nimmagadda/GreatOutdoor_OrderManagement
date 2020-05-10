import { Component, OnInit } from '@angular/core';
import { CartDTO, SCartService } from '../s-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-to-cart',
  templateUrl: './add-item-to-cart.component.html',
  styleUrls: ['./add-item-to-cart.component.css']
})
export class AddItemToCartComponent implements OnInit {

  cart: CartDTO = new CartDTO("", "", 0);
  constructor(private cartservice: SCartService,private router:Router ) { }

  ngOnInit(): void {
  }
  addItemToCart(cart: CartDTO):void{
    this.cartservice.addItemToCart(cart)
    .subscribe(response=>this.handleSuccessfulResponse(response),
      (result)=>{
        if(result!=null)
        alert("Items Added To Cart Successfully");
        else
        alert("Adding Items To Cart is Unsuccessful");
      });
      }
  handleSuccessfulResponse(response)
  {
    console.log(response)
    this.cart=response;
  }

}
