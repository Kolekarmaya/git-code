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
  // name:any=['User','Admin']
  city:any;
 



  constructor(private fb: FormBuilder, private form:DataserviceService, private route:Router) {}

  ngOnInit(): void {
    this.registration =this.fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      empId:['',[Validators.required]],
      branch:['',[Validators.required]],
      role:['',[Validators.required]],
      

    })
  }
  
  Submit(){
    console.log(this.registration);
    console.log(this.registration.value);
    this.form.postData(this.registration.value).subscribe((res:any)=>
    {
      console.log(res);
    })
    this.isSubmitted=true;
      this.route.navigate(['admin']);
  //     // Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
  }


  home(){
    this.route.navigate(['home'])
  }


  get f(){
    return this.registration.controls;
  
  }
}




