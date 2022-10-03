import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'class': 'app-content'}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
