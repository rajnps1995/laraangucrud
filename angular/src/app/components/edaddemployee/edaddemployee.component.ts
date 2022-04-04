import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edaddemployee',
  templateUrl: './edaddemployee.component.html',
  styleUrls: ['./edaddemployee.component.css']
})
export class EdaddemployeeComponent implements OnInit {
  name!:string;
  email!:string;
  image!:string;
  constructor(private proser:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  addPro(){
    let formData={name:this.name,email:this.email,image:this.image}
    console.log(formData) 
    this.proser.addEmployee(formData)
     .subscribe(res=>{
       if(res){
         console.log(res)
         alert("Employee Added");
         this.router.navigate(["/employee"]);
       }
     })
  }

}
