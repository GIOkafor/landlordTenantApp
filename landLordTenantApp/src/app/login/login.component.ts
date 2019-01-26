import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new FormControl('');
  password = new FormControl('');

  constructor(
    private afAuth:AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
  }

  login(user, password){
    //this.fb.auth()
    console.log("Username: ", user.value);
    console.log("Password: ", password.value);

    this.afAuth.auth.signInWithEmailAndPassword(user.value,password.value)
      .then(_=>{
        console.log("Login successful");
        this.router.navigate(['dashboard']);
      });
  }

}
