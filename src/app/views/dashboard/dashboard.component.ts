import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MainTableComponent } from '../../shared/components/main-table/main-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sendValueToDisplay = undefined;  
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

}
