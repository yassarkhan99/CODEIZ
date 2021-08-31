import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  public dataReports(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/");
  }
  getData()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/");
  }
}
