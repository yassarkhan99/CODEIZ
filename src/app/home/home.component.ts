import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bgimage:string="assets/images/html-color-codes-color-tutorials-hero.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
