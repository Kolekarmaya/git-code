import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public Data: any;
  public city: any;
  deleteData:any;
  

  constructor(private data: DataserviceService, private route:Router) {
    this.getalldata1();
  }

  ngOnInit(): void {

  }
  AddData(){
    this.route.navigate(['registration']);
  }

  getalldata1() {
    this.data.getData1().subscribe((res:any) => {
        console.log(res);
        this.Data=res;
        this.deleteData=res;
      })

  }


  insertData() {
    this.data.postData(this.city).subscribe(
      (res: any) => {
        console.log(res);
  
  })
}

onEdit(id:any, data:any){
  console.log(id);
  console.log(data);
  this.data.setMessage(id, data)
  this.route.navigate(['edit']);
}
 
onDelete(data1:any){
  this.data.deleteData(data1).subscribe((res:any)=>{
    console.log(res);
    console.log(this.deleteData);
     if(this.deleteData.length > 0){
        this.getalldata1();
     }
  })
 }

}

 

