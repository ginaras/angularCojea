import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  pricePerMonth = 20;
  individuals = 3;
  months = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getTotal() {
    return this.individuals * this.months * this.pricePerMonth;
  }

}
