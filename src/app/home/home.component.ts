import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
userName: any;
email: any;
pwd: any;
loginEmail: any;
loginPwd: any;
signupDetails: any;

  constructor(private formBuilder:FormBuilder, private http:HttpClient) {}

  signupForm = this.formBuilder.group({

    userName: ["",Validators.required],
    email: ["",[Validators.required,Validators.email]],
    pwd: ["",Validators.required]

  })

  loginForm = this.formBuilder.group({

    loginEmail: ["",[Validators.required,Validators.email]],
    loginPwd: ["",Validators.required]
  })
  
 

signupData(){
  this.http.post("http://localhost:3000/posts",this.signupForm.value).subscribe()
    console.log(this.signupForm.value);
    this.signupForm.reset();
  } 
}




