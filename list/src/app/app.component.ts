import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent to Child';
  name = 'Akash Sharma';
  public msg;
  mySentences = new Array("Mary", "Tom", "Jack", "Jill");
  akash: any = [
    { id: 1, text: 'Sentence 1' },
    { id: 2, text: 'Sentence 2' },
    { id: 3, text: 'Sentence 3' },
    { id: 4, text: 'Sentence 4' },
  ];



  transectiontable: any = [
    { id: 1, type: 'Credit', ammount: '500' },
    { id: 2, type: 'Debit' , ammount: '1500'},
    { id: 3, type: 'Credit' , ammount: '5500'},
    { id: 4, type: 'Debit', ammount: '2500' },
  ];

  getCurrentUser(user){
    console.log(user);

  }

  constructor() {
    console.log(this.transectiontable);
  }
}
