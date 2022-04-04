import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  id!:number;
  name!:string;
  email!:string;
  image!:string;

  constructor(private ar:ActivatedRoute,private proser:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];//params
    this.proser.getProductById(this.id)
    .subscribe(res=>{
      this.name=res.name;
      this.email=res.email;
      this.image=res.image;
    })
  }

  editPro(){
    let formData={name:this.name,email:this.email,image:this.image}
    this.proser.updateProduct(this.id,formData)
    .subscribe(res=>{
      if(res){
        alert("Employee Updated");
        this.router.navigate(["/employee"]);
      }
    })
 }

}
