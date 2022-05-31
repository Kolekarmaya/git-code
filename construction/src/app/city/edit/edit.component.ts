import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 updateform:any;
  dataPoint:any;
  isSubmitted:boolean=false;
  
  public myform:any;
  public update:any;
  
    constructor(private data:DataserviceService, private fb:FormBuilder, private route:Router) { 
      this.data.getMessage().subscribe((res:any)=>{
        console.log(res);
        console.log(res.id);
        this.dataPoint=res;
      })
      
    }
  
    ngOnInit(): void {
      this.updateform = this.fb.group({
        name:[this.dataPoint.name],
        age:[this.dataPoint.age],
        empId:[this.dataPoint.empId],
        role:[this.dataPoint.role],
      })
    }
  
    updatedata(){
      console.log(this.updateform.value);
      this.data.editData(this.dataPoint.id,this.updateform.value).subscribe((res:any)=>{
        console.log(res);
      })
      this.isSubmitted=true;
      this.route.navigate(['admin'])
  
    }
    home(){
      this.route.navigate(['home'])
    }
    admin(){
      this.route.navigate(['admin'])
    }
    
    get f(){
      return this.updateform.controls
    }
  
  
  }
