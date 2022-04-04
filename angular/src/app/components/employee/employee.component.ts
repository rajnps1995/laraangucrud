import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  proData:Employee[]=[];
  constructor(private proser:EmployeeService) { }

  ngOnInit(): void {

    this.proser.getAllEmployee()
    .subscribe((data:Employee[])=>{
      this.proData=data;
      console.log(data)
    })

  }

  delPro(id:any){
    if(confirm("Do u want to delete?"))
    {
       this.proser.deleteProduct(id)
       .subscribe(res=>{
         if(res){
           alert("Employee Deleted");
           this.proser.getAllEmployee()
           .subscribe((data:Employee[])=>{
             this.proData=data;
           })
         }
       })
    }
  }

}
