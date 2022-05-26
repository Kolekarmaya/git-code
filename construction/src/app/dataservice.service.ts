import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) {

  }
  // pune
  getDate(){
    return this.http.get('http://localhost:3000/api/getAllpuneAddress');
  }
  sendData(FormData:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users/',FormData)
  }
   
// Mumbai
getbackend(){
    return this.http.get('http://localhost:3000/api/getAllmumbaiAdress');
  }

}