import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isSubmitted:boolean=false;
public loginform:any;
public user1:any;
  constructor( private fb:FormBuilder, private ser:DataserviceService, private route:Router) { }

  ngOnInit(): void {
    this.loginform= this.fb.group({
      name:['',[Validators.required]],
      empId:['',[Validators.required]]

    })
  }
OnSubmitForm(){
  this.loginform.value;
  console.log(this.loginform.value);
  this.isSubmitted=true;

  this.ser.getData1().subscribe((res:any)=>{
    console.log(res);
    this.user1=res.find((a:any)=>{
      return a.empId===this.loginform.value.empId && a.name=== this.loginform.value.name;
    });
      if(this.user1){
        alert('LogIn Successfully Done...');
        if (this.user1.role==='user'){
          alert('got user');
          this.ser.setMessage(this.user1.id,this.user1);
          this.route.navigate(['user']);
        }else{
          alert('got Admin');
          this.ser.setMessage(this.user1.id,this.user1);
          this.route.navigate(['admin']);
        }
      }else{
        alert('User not found');
      }
   
  },(err:any)=>{
    console.log(err);
    alert('something goes wrong')
  }
  )

}
  NewUser(){
    this.route.navigate(['registration']);
  }
  home(){
    this.route.navigate(['home'])
  }

get f(){
  return this.loginform.controls;
}

}