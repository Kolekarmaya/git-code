import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

isSubmitted:boolean=false;
public registration:any;

constructor(private fb:FormBuilder, private route:Router, private ser:DataserviceService) { }

ngOnInit(): void {
  this.registration=this.fb.group({
      name:['',[Validators.required]],
      role:['',[Validators.required]],
      empId:['',[Validators.required]],
      age:['',[Validators.required]],
      branch:['',[Validators.required]],
  })
}
Submit(){
  this.registration.value;
  console.log(this.registration.value);
  this.isSubmitted=true;
  this.route.navigate(['login']);

  this.ser.postData(this.registration.value).subscribe((res)=>{
    console.log(res);
  })

}
  AlreadyUser(){
    this.route.navigate(['login']);
  }
  home(){
        this.route.navigate(['home'])
      }
    
  

  get f(){
    return this.registration.controls;
  }

}



