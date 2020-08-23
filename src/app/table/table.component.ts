import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
   data = [];
  ngOnInit(): void {
    for(var i = 1; i<=10; i++){
      this.data.push(`2 X ${i} = ${2*i}`);
    }
  }

}
