import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onw-way-binding';
  text = '';
  textSize = 10;
  textCls = '';
  person = {
      name:  '',
      email: '',
      cmp: '',
      sal: ''
  };
  isDataSubmitted=false;
  setValue(event){
    const keyName = event.target.name;
    const value = event.target.value;
    this.person[keyName]=value;
  }
  submitData(){
    for (const key in this.person){
      const val = this.person[key];
      if(val.trim().length==0){
        alert("Field must not be Blank");
        return;
      }
    }
    this.isDataSubmitted = true;
    console.log(this.person);

  }
  resetForm(){
    this.isDataSubmitted = false;
    this.person = {
      name:  '',
      email: '',
      cmp: '',
      sal: ''
  };
  }
  setText(event) {
    const a = event.target.value;
    this.text = a;
  }
  setSize(operation) {
    if (operation === 'inc') {
      this.textSize += 1;
    }
    else {
      this.textSize -= 1;
    }
  }
  setColor(event){
    const b = event.target.value;
    this.textCls = b;
  }
  sizeSetter(event){
    const c = event.target.value;
    this.textSize = c;

  }

}
