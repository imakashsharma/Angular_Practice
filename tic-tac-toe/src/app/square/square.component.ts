import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button>{{ value }}</button>`,
  styles: []
})
export class SquareComponent  {
  @Input() value: 'X' | 'O';
  // rando;
  // constructor() {
  //   setInterval(() =>this.rando = Math.random(), 500)
  //  }
    
}
