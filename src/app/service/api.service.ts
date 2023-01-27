import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodData } from '../shared/model/FoodData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  get() {
    throw new Error('Method not implemented.');
  }

  public search  = new BehaviorSubject<string>("");

  constructor( private http :HttpClient) { }

  getItemById(id:number){
  //  return this.getAllData().filter(item=>item.id === id)
  }


  

  getAllData(){
    return this.http.get("http://localhost:3000/items")
    .pipe(map((res :any)=>{
      return res ;
    }))
  }

  // getAllData(){
  //   return this.http.get("https://hashtagloyalty.s3.ap-southeast-1.amazonaws.com/Take+Home+Assignment+-+Thrive.json")
  //   .pipe(map((res :any)=>{
  //          return res;
  //       }))
  // }

  // getProductbycode(code :any){
  //   return this.http.get("https://hashtagloyalty.s3.ap-southeast-1.amazonaws.com/Take+Home+Assignment+-+Thrive.json/"+code)
  // }


}
