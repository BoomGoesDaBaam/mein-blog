import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['../home/home.component.css']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('jup');
  }

}
