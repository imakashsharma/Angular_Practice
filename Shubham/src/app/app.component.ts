import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get Values from Forms';

  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('')

  })

  get email(){
    return this.loginForm.get('email')
  }

  data = {
    name: "Akash Sharma",
    designation: "Software Trainee"
  }
  getData(values) {
    console.log(values);
  }

  myEvent(evt) {
    console.log(evt)
  }
}
