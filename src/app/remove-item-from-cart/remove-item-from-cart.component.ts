import { Component, OnInit } from '@angular/core';
import { CartDTO, SCartService } from '../s-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-item-from-cart',
  templateUrl: './remove-item-from-cart.component.html',
  styleUrls: ['./remove-item-from-cart.component.css']
})
export class RemoveItemFromCartComponent implements OnInit {

  user : CartDTO=new CartDTO("","",0);
  message:string
  constructor(private cartservice:SCartService,private router:Router) { }

  ngOnInit(): void {
  }
  delete(deleteproduct: CartDTO): void {
    this.cartservice.delete(this.user.productId,this.user.userId).subscribe(data => {
      this.message = data
      console.log(this.message);
    });
  }
}
