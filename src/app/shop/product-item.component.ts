import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Iproduct } from '../models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Iproduct

  constructor(private service:CartService,private route:Router) { }
  userId:1000;
  datas:any;
  display="none";
  
  ngOnInit(): void {
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    window.location.reload();
    
  }
  Viewproddetails(id:number):void{
    this.route.navigateByUrl("/view/"+id);
  }

  AddProdtoCart(ProductId:number):void{
    this.service.AddCart(ProductId,1001).subscribe(data=>{
      console.log(data);
      this.datas=data.result;
      })
  }

  
  

}
