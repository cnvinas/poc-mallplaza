import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock-service.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  columns = [
    { title: "Index" },
    { title: "First" },
    { title: "Last" },
    { title: "Handle" }
  ]
  rows: any[];
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable() {
    this.mockService.getData().subscribe(res => {
      this.columns = res.cols;
      this.rows = res.rows;
    })
  }

}
