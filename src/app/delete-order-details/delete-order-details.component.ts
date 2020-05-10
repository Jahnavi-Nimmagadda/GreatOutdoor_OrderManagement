import { Component, OnInit } from '@angular/core';
import { OrderProductMapDTO, SOrderProductMapService } from '../s-orderproductmap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-order-details',
  templateUrl: './delete-order-details.component.html',
  styleUrls: ['./delete-order-details.component.css']
})
export class DeleteOrderDetailsComponent implements OnInit {
orderId="";
ord:OrderProductMapDTO[];
  data:OrderProductMapDTO=new OrderProductMapDTO("","","",0,0);
  constructor(private service:SOrderProductMapService,private routing:ActivatedRoute) { }

  ngOnInit(): void {
  }
onDelete(order:OrderProductMapDTO)
{
  // this.ord=[{orderId:this.data.orderId,
  //   productId:this.data.productId,
  //   ProductUIN:this.data.ProductUIN,
  //   productStatus:this.data.productStatus,
  //   giftStatus:this.data.giftStatus

  // }];
  console.log(order.orderId)
  this.service.delete(order.orderId).subscribe(
    (result)=>{
      if(result!=null)
      alert("cancelled order successfully");
      else
      alert("Cancillation failed");
    });
    }
    handleSuccessfulResponse(response)
    {
      console.log(response)
      this.data=response;
    }

    onSubmit(orderId:string)
    {
      console.log(orderId)
      return  this.service.getDeletOrderProductDetails(orderId).subscribe(
        response=>this.handleSuccessfulResponse(response),
        );
    }
  
    }



