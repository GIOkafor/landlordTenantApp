import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  login(user, password){
    //this.fb.auth()
    console.log("Username: ", user.value);
    console.log("Password: ", password.value);
  }

}
