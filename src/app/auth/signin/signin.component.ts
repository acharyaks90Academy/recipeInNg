import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authserve: AuthService) { }

  ngOnInit() {
  }

  onSignin(signupForm:NgForm){
    const email = signupForm.value.email;
    const password = signupForm.value.password;
    this.authserve.signinUser(email,password);
  }

}
