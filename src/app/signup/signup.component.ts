import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signupform !:FormGroup;
   submitted =false;
  constructor( private formBuilder : FormBuilder,private http :HttpClient,private router:Router) { 
  }

  ngOnInit(): void {
    this.signupform =this.formBuilder.group({
      Email:['',Validators.required],
      Name:['',Validators.required],
      Password:['',Validators.required]
    })
  }
 
  get f() { return this.signupform.controls; }
  
  signup(){
     this.submitted = true;
     if (this.signupform.invalid) {
      return;
  }
    this.http.post<any>("http://localhost:3000/signupusers",this.signupform.value)
    .subscribe(res=>{
      alert("signUp succesfully");
      this.signupform.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong")
    })
  }
  


}
