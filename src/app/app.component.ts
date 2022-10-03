import { Component } from '@angular/core';


declare var window: any;
window.Appcues.identify('12345');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Elijah's Angular Demo App";


}
