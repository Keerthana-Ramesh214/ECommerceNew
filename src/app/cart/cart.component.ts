import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
datas:any;
GrandTotal:number=0;
cart1:boolean;
product:any;
count:number=0;
  constructor(public service:CartService) { }

  ngOnInit(): void {
    this.service.iscart=true;
    this.service.GetcartforUser(1001).subscribe((data)=>{
    console.log(data);
    this.datas=data;
    this.datas.forEach(element => {this.GrandTotal=element.subTotal+this.GrandTotal
    });
  });
}

Removeitem(PdtId : number):void{
  this.service.RemoveCartItem(PdtId,1001).subscribe(data=>{
    console.log(data);
    })
   window.location.reload();
}


}
