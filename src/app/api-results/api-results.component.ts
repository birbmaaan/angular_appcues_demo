import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.component.html',
  styleUrls: ['./api-results.component.css']
})
export class ApiResultsComponent implements OnInit {
  @Input() results: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
