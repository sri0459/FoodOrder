import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
   public products : any =[];
   public grandTotal :number =0;
  constructor( private cart:CartService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.cart.getproducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cart.getTotalprice();
    })
  }
  removeitem(item : any){
    this.cart.removecartItem(item);
  }
  emptycart(){
    this.cart.removeAll();
  }
 
}
