import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MainTableComponent } from '../../shared/components/main-table/main-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sendValueToDisplay = undefined;  
  showDashboard = false;
  @Output()
  showLogin = new EventEmitter<boolean>();
  @ViewChild(MainTableComponent) child: MainTableComponent;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(!this.sendValueToDisplay){
      this.sendValueToDisplay = "machines";
    }
  }

  handleValueToDisplay(event){
    this.child.initTable(event);
  }

  logout(event){
    this.showLogin.emit(event);
  }

}
