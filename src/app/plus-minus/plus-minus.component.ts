import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.scss']
})
export class PlusMinusComponent implements OnInit {

  @Input() value: number;
  @Input() min: number;
  @Input() max: number;
  
  @Output() valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.value += 1;
    if (this.max !== undefined && this.value > this.max) {
      this.value = this.max;
    }
    this.valueChanged.emit(this.value);
  }

  decrement() {
    this.value -= 1;
    if (this.min !== undefined && this.value < this.min) {
      this.value = this.min;
    }
    this.valueChanged.emit(this.value);
  }

}
