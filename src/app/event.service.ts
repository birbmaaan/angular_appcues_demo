import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  events: string[] = [];

  add(event: string) {
    this.events.push(event);
    console.log('adding events');
    console.log(this.events);
    console.log(this.events.length);
  }

  clear() {
    // this.events = [];
    this.events.push('test');
    console.log('clearing events');
    console.log(this.events);
  }

  print() {
    var events = this.events;
    this.events = [];
    this.events = events;
  }
}
