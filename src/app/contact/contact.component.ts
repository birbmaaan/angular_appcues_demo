import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {'class': 'app-content'}
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
