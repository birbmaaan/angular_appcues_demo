import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  parseData(data: JSON): string { // function to format event data into HTML-readable format
    let dataArray = JSON.stringify(data).split('');
    let parsed = "";
    // let parsed = "<pre>";
    let indent = "";
    let isStepHtml = false;

    dataArray.forEach((char, index) => {
      if (char === "{") {
        if (dataArray[index - 1] === "[" || dataArray[index - 1] === ":") {
          isStepHtml = false;
          indent += "&nbsp;&nbsp;&nbsp;&nbsp;"
          parsed += char + "<br>" + indent;
        } else {
          isStepHtml = true; 
          parsed += char;
        }
      } else if (char === "}") {
        if (isStepHtml === false) {
          indent = indent.substring(24);
          parsed += "<br>" + indent + char;
        } else {
          parsed += char;
        }
      } else if (char === ",") {
        parsed += char + "<br>" + indent;
      } else if (char === ":") {
        parsed += char + " ";
      } else if (char === "<") {
        parsed += "&lt;";
      } else if (char === ">") {
        parsed += "&gt;";
      } else {
        parsed += char;
      }
    })

    // parsed += "</pre>"
    console.log(parsed);
    return parsed;
  }

  logEvents(name: string, payload: JSON): void { // function to log Appcues events on the page
    const eventsLog = document.getElementById('events-log'); // get the event log HTML element from the page
    const eventName = document.createElement('li'); // create a list element for the event name
    const eventData = document.createElement('p'); // create a paragraph element for the event payload

    const parseStr = this.parseData(payload); 
    eventName.innerHTML = (name); // add the event name to the HTML element
    eventData.innerHTML = (parseStr); // add the stringified event payload

    if (eventsLog) {
      eventsLog.appendChild(eventName); // add the name onto the page
      eventsLog.appendChild(eventData); // add the payload onto the page
    }
  }

  clearLog(): void { // removes all listed events in the event log
    const eventsLog = document.getElementById('events-log');

    if (eventsLog) { 
      while (eventsLog.firstChild) {
        eventsLog.removeChild(eventsLog.firstChild);
      }
    }
  }
}
