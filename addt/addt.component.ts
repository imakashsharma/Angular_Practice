import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addt',
  templateUrl: './addt.component.html',
  styleUrls: ['./addt.component.css']
})
export class AddtComponent implements OnInit {
  @Output() parentFunction:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit("Akash")
  }

  sendData(){
    this.parentFunction.emit("Akash")
  }

}
