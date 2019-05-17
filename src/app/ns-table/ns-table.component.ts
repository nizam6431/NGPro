import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ns-table',
  templateUrl: './ns-table.component.html',
  styleUrls: ['./ns-table.component.css']
})
export class NsTableComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = 'nizam siddiqui';
  }

}