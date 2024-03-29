import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {
  public value:any;
  public table1:any;
  public table2:any;
  public table3:any;
  public table4:any;
  public table5:any;
  public table6:any;
  link1:any;

  constructor(private data:DataserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getalldata();
  }

  getalldata(){
    this.data.getbackend().subscribe((res:any)=>{
      console.log(res);
      this.value=res;
      this.table1=res[0];
      this.table2=res[1];
      this.table3=res[2];
      this.table4=res[3];
      this.table5=res[4];
      this.table6=res[5];
      
      
    })
  }

  onRegistration(){
    this.route.navigate(['city/registration'])
  }

  onlogin(){
    this.route.navigate(['city/login'])
  }
  home(){
    this.route.navigate(['home'])
  }


}

