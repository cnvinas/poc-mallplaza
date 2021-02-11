import { Component, Input, OnInit } from '@angular/core';
import { MockService } from '../../services/mock-service.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  @Input() displayData;
  columns: any[];
  rows: any[];

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable(data?) {
    let dataToDisplay = data ? data : this.displayData;
    switch (dataToDisplay) {
      case "machines":
        this.getMachines();
        break;
      case "malls":
        this.getMalls();
        break;
      case "countries":
        this.getCountries();
        break;
    }
  }

  getMachines() {
    this.mockService.getMachines().subscribe(res => {
      this.columns = this.getColumns(res.cols[0]);
      this.rows = res.rows;
    });
  }

  getMalls() {
    this.mockService.getMalls().subscribe(res => {
      this.columns = this.getColumns(res.cols[0]);
      this.rows = res.rows;
    });
  }

  getCountries() {
    this.mockService.getCountries().subscribe(res => {
      this.columns = this.getColumns(res.cols[0]);
      this.rows = res.rows;
    });
  }

  orderValues() {
    return 0;
  }

  getColumns(cols) {
    return Object.values(cols);
  }

}
