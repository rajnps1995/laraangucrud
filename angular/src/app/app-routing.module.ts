import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdaddemployeeComponent } from './components/edaddemployee/edaddemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
{path:'employee',component:EmployeeComponent},
{path:'add_employee',component:EdaddemployeeComponent},
{path:'editemployee/:id',component:EditemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
