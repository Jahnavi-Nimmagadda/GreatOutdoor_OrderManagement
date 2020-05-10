import { Component, OnInit } from '@angular/core';
import { OrderProductMapDTO,SOrderProductMapService } from '../s-orderproductmap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-order-product-mapentity',
  templateUrl: './delete-order-product-mapentity.component.html',
  styleUrls: ['./delete-order-product-mapentity.component.css']
})
export class DeleteOrderProductMapentityComponent implements OnInit {
ord:OrderProductMapDTO=new OrderProductMapDTO("","","",0,0);
message:string;
orderId:string;

  constructor(private productservice : SOrderProductMapService,private router:Router) { }

  ngOnInit(): void {
  }
  delete(orderId:string):void{

    console.log(orderId);
    
    this.productservice.delete(orderId).subscribe(data => {
    
      this.message = data
      console.log(this.message);
    
    
    });
  }

}
