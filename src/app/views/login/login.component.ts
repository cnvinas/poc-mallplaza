import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() 
  showDashboard = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.showDashboard.emit(true);
  }
}
