import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LaunchpadService } from '../launchpad.service';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-launchpadapi',
  templateUrl: './launchpadapi.component.html',
  styleUrls: ['./launchpadapi.component.css'],  
  host: {'class': 'app-content'}
})

export class LaunchpadapiComponent implements OnInit {
  results = '';
  account = '';
  user = '';
  url = '';

  constructor(
    private launchpadService: LaunchpadService,
    private utilities: UtilitiesService
  ) { }

  ngOnInit(): void {
    // this.fetchResults();
  }

  fetchResults(): void {
    this.launchpadService.fetchResults(this.account, this.user, this.url)
      .subscribe(results => {
        this.results = this.utilities.parseData(results)
      });
  }

  setData(id: string, type: string): void {
    if (type === "account"){
      this.account = id;
    } else if (type === "user") {
      this.user = id;
    } else {
      this.url = id;
    }
  }

  clearForm(): void {
    this.account = '';
    this.user = '';
    this.url = '';
  }
}