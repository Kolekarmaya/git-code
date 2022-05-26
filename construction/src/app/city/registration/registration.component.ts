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
  registration:any;
  sub:any;
  name:any=['User','Admin']


  constructor(private fb: FormBuilder, private form:DataserviceService, private roue:Router) { }

  ngOnInit(): void {
    this.registration =this.fb.group({
      name:['',[Validators.required]],
      Email:['',[Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:['',[Validators.required]],
      cpass:['',[Validators.required]],
     
    })
  }
  
  Submit(){
    console.log(this.registration);
    console.log(this.registration.value);
    this.isSubmitted=true;

    this.form.sendData(this.registration.value).subscribe((res:any)=>
    {
      console.log(res);

    },
    (err:any)=>{
      console.log(err);
    }
    )
    

  }
  get f(){
    return this.registration.controls;
  
  }
}
