import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  @Input()  title;
  @Input() name;
  @Input() mySentences;
  @Input() akash;
  

  constructor() { }
  @Output() public peru="viswa";
  ngOnInit(): void {
  }

}
