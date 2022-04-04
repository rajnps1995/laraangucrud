import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiURL="http://127.0.0.1:8000/api/todos/";
todo:any[]=[];
todo1:any[]=[];
todo2:any[]=[];
search!:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiURL).subscribe((res:any)=>{
      console.log(res)
      this.todo = res.todo_list;
    })
    this.http.get(this.apiURL).subscribe((res:any)=>{
      console.log(res)
      this.todo1 = res.todo_list;
    })
    this.http.get(this.apiURL).subscribe((res:any)=>{
      console.log(res)
      this.todo2 = res.todo_list;
    })
  }

}
