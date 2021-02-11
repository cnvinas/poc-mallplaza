import { Component } from '@angular/core';
import { eventNames } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDashboard = false;
  showLogin = true;
  title = 'poc-mallplaza';

  displayDashboard(event){
    this.showDashboard = event;
    this.showLogin = !event;
  }
}
