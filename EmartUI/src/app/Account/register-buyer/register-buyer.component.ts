import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { combineLatest } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {

  RegisterForm:FormGroup;
  submitted=false;
  lists:Buyer[];
  buyer:Buyer;
  constructor(private formbuilder:FormBuilder,private service:AccountService,private route:Router) { 
  }

  ngOnInit() {
      this.RegisterForm=this.formbuilder.group({
      username:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]{2,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9~`!@#$%^&*()-+=]{6,15}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
    });
  }
  
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm.valid)
    {
      this.buyer=new Buyer();
      this.buyer.id='B'+Math.round(Math.random()*999);
      this.buyer.username=this.RegisterForm.value["username"];
      this.buyer.password=this.RegisterForm.value["password"];
      this.buyer.emailid=this.RegisterForm.value["emailid"];
      this.buyer.mobilenumber=this.RegisterForm.value["mobile"];
      this.buyer.createddatetime=new Date();
      console.log(this.buyer); 
      this.service.BuyerSignup(this.buyer).subscribe(res=>{
        this.buyer=res;
        console.log(this.buyer);
        alert('SignUp Successfull');
        this.route.navigateByUrl('/login');
      },err=>{
        console.log(err);
      })
    }
  }
  get f() { return this.RegisterForm.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm.reset();
}
}
