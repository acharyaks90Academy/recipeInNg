import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authServe: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(signForm: NgForm){
      const email = signForm.value.email;
      const password = signForm.value.password;
    this.authServe.signupUser(email,password);
  }

}
