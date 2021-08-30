import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentVal="";
  title = 'Input';
  getVal(val){
    console.warn(val)
    this.currentVal=val;
  }
}
