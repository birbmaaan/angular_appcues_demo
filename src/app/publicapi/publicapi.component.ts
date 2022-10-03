import { Component, OnInit } from '@angular/core';

import { PublicapiService } from '../publicapi.service';
import { UtilitiesService } from '../utilities.service'; 

@Component({
  selector: 'app-publicapi',
  templateUrl: './publicapi.component.html',
  styleUrls: ['./publicapi.component.css'],
  host: {'class': 'app-content'}
})

export class PublicapiComponent implements OnInit {
  results = "";
  content = "";
  content_id = ""; 
  key = "";
  secret = "";
  account = "";
  bulk = "no";
  conditions = '';

  constructor(
    private apiService: PublicapiService,
    private utilities: UtilitiesService
  ) { }

  ngOnInit(): void {
  }

  getData(): void {
    this.apiService.get(this.key, this.secret, this.account, this.content, this.content_id, this.conditions)
      .subscribe(response => {
        this.results = this.utilities.parseData(response)
      })
  }
}