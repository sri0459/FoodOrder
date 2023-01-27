import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   public cartItemList : any =[];
   public productlist = new BehaviorSubject<any>([]);
  constructor() { }

  getproducts(){
    return this.productlist.asObservable();
  }
  setproduct(products : any){
    this.cartItemList.push(...products);
    this.productlist.next(products);
  }
  addtocart(product : any){
   this.cartItemList.push(product);
   this.productlist.next(this.cartItemList);
   this.getTotalprice();
   console.log(this.cartItemList);
  }
  getTotalprice() : number{
    let gandtotal=0;
    this.cartItemList.map((a:any)=>{
      gandtotal +=a.total;
    })
    return gandtotal;
  }
  removecartItem(product : any){
    this.cartItemList.map((a:any, index :any)=>{
     if(product.id===a.id){
      this.cartItemList.splice(index,1)
     }
    })
    this.productlist.next(this.cartItemList);

  }

  removeAll(){
    this.cartItemList=[];
    this.productlist.next(this.cartItemList);
  }
}
