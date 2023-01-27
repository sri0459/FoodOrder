import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
setTimeout() {
throw new Error('Method not implemented.');
}

  SernameId :number = 10;

  severStatus= "Welcome to sridhar";

  Newserver ="server is not Creazted"

  ServaerStatus : string = 'true';

  submitted =false;
  public loginForm !:FormGroup;
serverID: any;
  alowserver =false;
  constructor( private formBuilder : FormBuilder, private http :HttpClient, private router :Router,
    
    
    ) {
      setTimeout(() => {
        this.alowserver = true;
      }, 2000);
     }

     allowServerr(event :Event){
        this.severStatus =(<HTMLInputElement>event.target).value;
     }
     createServer(){
      this.Newserver='NewServer is created' +this.severStatus;
      console.log(this.Newserver);
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:['',Validators.required],
      Password :['',Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  login(){
    this.submitted = true;
     if (this.loginForm.invalid) {
      return;
     }
   this.http.get<any>("http://localhost:3000/signupusers")
   .subscribe(res=>{
    const user =res.find((a:any)=>{
      return a.Email ===this.loginForm.value.Email && a.Password === this.loginForm.value.Password
    });
    if(user){
      alert("Login Success !!");
      this.loginForm.reset();
      this.router.navigate(["home"])
    }else{
      alert("User Not found")
    }
   },err=>{
    alert("Something went Wrong !!")
   })
  }
}
