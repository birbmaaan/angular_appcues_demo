import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  host: {'class': 'toolbox'}
})

export class ToolboxComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }

  resetAppcues = () => { // resets the session and removes user information from local storage
      window.Appcues.reset();
      window.localStorage.removeItem("currentUser");
      window.localStorage.removeItem("timestamp");
  }

  clearShow(): void {
    window.Appcues.clearShow();
  }

  anonymousUser(): void {
    window.Appcues.anonymous();
  }

  showFlow(content: string) {
    window.Appcues.show(content);
  }

  openDebugger(): void {
    window.Appcues.debug();
  }
}
