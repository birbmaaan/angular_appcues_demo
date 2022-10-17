import { Component, OnInit } from '@angular/core';

import { PublicapiService } from '../publicapi.service';
import { UtilitiesService } from '../utilities.service'; 
import { Parameters } from '../interfaces/parameters';
import { ApiInfo } from '../interfaces/api-info';
import { tap, catchError } from 'rxjs';

@Component({
  selector: 'app-publicapi',
  templateUrl: './publicapi.component.html',
  styleUrls: ['./publicapi.component.css'],
  host: {'class': 'app-content'}
})

export class PublicapiComponent implements OnInit {
  
  apiInfo: ApiInfo = {
    key: "",
    secret: "",
    account: "", 
    results: "",
    content: "",
    content_id: "", 
    bulk: true,
    condition_one: ["","",""]
  }
  parameters: Parameters = {
    email: "",
    format: 'csv',
    start_time: "YYYY-MM-DD",
    conditions: []
  }

  constructor(
    public apiService: PublicapiService,
    private utilities: UtilitiesService
  ) { }

  ngOnInit(): void {
  }

  requestData(): void {
    const api = this;
    this.apiInfo.results = "Requesting your data..."
    this.apiService.makeRequest(this.apiInfo, this.parameters)
      .subscribe({
        next(response) {
          api.apiInfo.results = api.utilities.parseData(response)
        },
        error(error) {
          let errorMessage = api.utilities.parseData(error); 
          api.apiInfo.results = 'Something went wrong. <br>Please check your request and try again: <br><br>' + errorMessage;
        }
      })
  }

  addCondition(): void {
    this.parameters.conditions.push(this.apiInfo.condition_one);
    this.apiInfo.condition_one = ['', '', ''];
    console.log(this.parameters.conditions);
  }

  clearConditions(): void {
    this.parameters.conditions = [];
    this.apiInfo.condition_one = ['', '', ''];
  }

  removeCondition(): void {
    this.parameters.conditions.pop();
  }

  clearForm(): void {
    this.apiInfo.content = "";
    this.apiInfo.content_id = ""; 
    this.apiInfo.condition_one = ["","",""];
    this.apiInfo.key = "";
    this.apiInfo.secret = "";
    this.apiInfo.account = "";
    this.parameters.email = "";
    this.parameters.format = 'csv';
    this.parameters.start_time = "YYYY-MM-DD";
    this.parameters.conditions = [];
  }

  clearResults(): void {
    this.apiInfo.results = "";
  }

  requestReady(): string {

    var isReady = "";
    var contentType = this.apiInfo.content.split('');

    if (this.apiInfo.key === '' || this.apiInfo.secret === '' || this.apiInfo.account === '') {
      isReady = 'purple';
    }

    if (this.apiInfo.bulk === false) {
      if (this.apiInfo.content_id === "" && !this.apiService.isPlural(this.apiInfo.content)) {
        isReady = 'purple';
      }

      if (this.apiInfo.content === '') {
        isReady = 'purple';
      }
    } else {
      if (this.parameters.email === '' || this.parameters.format === '' ) {
        isReady = 'purple';
      }
      Object.values(this.parameters).forEach(val => {
        if (val === '' || val === 'YYYY-MM-DD') {
          isReady = 'purple';
        }
      })
    }

    return isReady;
  }
}