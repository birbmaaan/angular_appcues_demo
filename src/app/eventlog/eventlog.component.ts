import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { UtilitiesService } from '../utilities.service';

declare var window: any;

@Component({
  selector: 'app-eventlog',
  templateUrl: './eventlog.component.html',
  styleUrls: ['./eventlog.component.css'],
  host: {'class': 'eventlog'}
})

export class EventlogComponent implements OnInit {

  constructor(
    public eventService: EventService,
    private utilities: UtilitiesService
  ) { }

  ngOnInit(): void {

    var eventLog = this; 
    window.Appcues.on("all", function(name: string, payload: JSON) {
      // eventLog.eventService.add(name);

      eventLog.utilities.logEvents(name, payload);
    })
  }

  clearLog(): void { // removes all listed events in the event log
    this.utilities.clearLog();
  }
}
