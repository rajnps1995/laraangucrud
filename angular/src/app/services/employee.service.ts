import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL="http://127.0.0.1:8000/api/employees/";

 //httpheaders 
 httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any>{
    return this.http.get(this.apiURL)
  }

  getProductById(id:number):Observable<any>{
    return this.http.get(`${this.apiURL}${id}`)
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.apiURL}${id}`);
  }

  addEmployee(data:Employee):Observable<any>{
    return this.http.post(this.apiURL,JSON.stringify(data),this.httpOptions);
  }

  updateProduct(id:number,data:Employee):Observable<any>{
    return this.http.put(`${this.apiURL}${id}`,JSON.stringify(data),this.httpOptions)
  }

}
