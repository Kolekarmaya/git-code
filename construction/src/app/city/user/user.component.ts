import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public gotUser:any;
  constructor(private ser:DataserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getuser();
  }

  getuser(){
    this.ser.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.gotUser=res;
    })
  }

  OnEditData(id:any,data:any){
    console.log(id);
    console.log(data);
    this.ser.setMessage(id,data);
    this.route.navigate(['edit']);
  }

}