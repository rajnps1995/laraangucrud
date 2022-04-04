import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EdaddemployeeComponent } from './components/edaddemployee/edaddemployee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EdnavbarComponent } from './components/ednavbar/ednavbar.component';
import { AscPipe } from './pipes/asc.pipe';
import { DescPipe } from './pipes/desc.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    EditemployeeComponent,
    EdaddemployeeComponent,
    EdnavbarComponent,
    AscPipe,
    DescPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
