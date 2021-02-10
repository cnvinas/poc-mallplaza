import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  @Output()
  sendValueToDisplay = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  displayMachinesData(){
    this.sendValueToDisplay.emit('machines');
  }  
  displayMallsData(){
    this.sendValueToDisplay.emit('malls');
  }  
  displayCountriesData(){
    this.sendValueToDisplay.emit('countries');
  }  
}
