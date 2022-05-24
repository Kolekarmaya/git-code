import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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


  constructor(private fb: FormBuilder, private form:DataserviceService, private roue:Router) { }

  ngOnInit(): void {
    this.registration =this.fb.group({
      name:[''],
      age:[''],
      empId:[''],
      branch:[''],
      role:['']
    })
  }
  
  Submit(){
    console.log(this.registration.value);
    this.form.postData(this.registration.value).subscribe((res:any)=>{
      console.log(res);
    })

  }

}
