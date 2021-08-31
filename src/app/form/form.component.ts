import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {UserService} from '../user.service'




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 
   displayedColumns: string[] = ['id', 'title', 'userId',];
   dataSource :any =[] ;

   constructor(
    private service:UserService,
    private http: HttpClient, ){ 
      
    }
    

    ngOnInit(): void {
      this.getData()
    }

  

   public getData(){
  
    this.service.getData().subscribe(res => {
      console.log(res)
      if (res) {
        this.dataSource = res
      }
    }, err => {
      console.log(err)
    })
   }

}

