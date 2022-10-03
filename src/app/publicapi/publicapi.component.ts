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
  content_id = "f896dd83-b991-40b3-9745-960c88903feb"; // flow id
  // content_id = "-MnWyunbzYc1vXSbc4Z_"; // segment id
  key = "a1d5dcec-ece1-4919-b0f5-4217cad4b4f2-02";
  secret = "e49a3d72-d08b-405f-ada7-c5da1265f568";
  account = "85728";
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