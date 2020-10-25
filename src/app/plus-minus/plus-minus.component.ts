import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.scss']
})
export class PlusMinusComponent implements OnInit {

  @Input() value: number;
  @Input() min: number = 0;
  @Output() valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.value += 1;
    this.valueChanged.emit(this.value);
  }

  decrement() {
    // if (this.value == 0) {
    //   return;
    // }
    this.value -= 1;
    if (this.value < this.min) {
      this.value = this.min;
    }
    this.valueChanged.emit(this.value);
  }

}
