import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
  }

  test(us,pwd){
    console.log(us, pwd);
  }

  signUp(user,pwd){
    console.log("Username: ", user.value);
    console.log("Password: ", pwd.value);

    this.afAuth.auth.createUserWithEmailAndPassword(user,pwd)
    .then((res) => {
      console.log("Signup successfull");
      this.router.navigate(['dashboard']);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
  }
}
