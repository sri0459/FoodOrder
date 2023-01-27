import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public searchTerm: string='';

public totalItem :number =0;

constructor(private api :ApiService,private cart:CartService){

}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.cart.getproducts()
  .subscribe(res=>{
    this.totalItem=res.length;
  })
  }
search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.api.search.next(this.searchTerm);
}
// ngonInit():void{
  
// }

}
