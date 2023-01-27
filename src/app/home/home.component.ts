import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import {FoodData}   from '../shared/model/FoodData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  
   
  datalist : FoodData[]=[];
  // items =[];

  searchKey:string="";
serverID: any;

  constructor(private api :ApiService,private route :ActivatedRoute,private cart:CartService){
   // this.getdata();
  }

  ngOnInit():void{


    this.getdata();






    
   // this.getAllData();

  //  this.route.params.subscribe(params=>{
  //   if(params.searchTerm)
  //   this.datalist=this.api.getAllData().fil
  //  })

  // this.route.params.subscribe(params=>{
  //   if(params.searchTerm)
  //   this.datalist = this.api.getAllData().filter(this.datalist=>this.datalist.name.toLoweCase())
  // })

   
  //  this.api.search.subscribe((val:any)=>{
  //   this.searchKey=val;
  //  })
  }

// getdata(){
//   this.api.getAllData().subscribe((res: any) => {
//     this.datalist = JSON.parse(JSON.stringify(res))["items"];
//   },
//     err => {
//       console.log(err);
//     },
//     () => {
//       console.log(this.datalist);
//     }
//   )
// }
  getdata(){
    this.api.getAllData()
    .subscribe(res=>{
      this.datalist = res;
      // console.log(this.datalist);

      this.datalist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }

  addtoCart(item : any){
       this.cart.addtocart(item);
  }


  
}


