import { Component, OnInit } from '@angular/core';

import { PublicapiService } from '../publicapi.service';
import { UtilitiesService } from '../utilities.service'; 
import { Parameters } from '../interfaces/parameters';
import { ApiInfo } from '../interfaces/api-info';

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
    start_time: "YYY-MM-DD",
    conditions: []
  }

  constructor(
    private apiService: PublicapiService,
    private utilities: UtilitiesService
  ) { }

  ngOnInit(): void {
  }

  getData(): void {
    this.apiService.get(this.apiInfo)
      .subscribe(response => {
        this.apiInfo.results = this.utilities.parseData(response)
      })
  }

  bulkRequest(): void {
    this.apiInfo.results = this.apiService.makeBulk(this.apiInfo, this.parameters)
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
}