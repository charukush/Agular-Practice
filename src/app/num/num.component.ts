import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css']
})
export class NumComponent implements OnInit {

  constructor() { }
   data = [];
  ngOnInit(): void {
    for(var i = 0; i <=10; i++){
      this.data.push(`${i}`);
    }
  }

}
