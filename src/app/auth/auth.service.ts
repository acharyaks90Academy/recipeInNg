import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

//import { error } from 'selenium-webdriver';


@Injectable()
export class AuthService {
  token: string ;

  constructor(private router : Router) { 
    
  }
  
  signupUser(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(
      error => console.log(error)
    )
  }
  signinUser(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
        .then(
          (token:string) => this.token = token
        )
      }
    )  
    .catch(
        error => console.log(error)
      )
  }

  getToken(){
     firebase.auth().currentUser.getToken()
       .then(
       (token: string) => this.token = token
       )
    return this.token;
  }

  isAuthenticated() {
     if(this.token){
       return true;
      }else{
        return false;
      }
  }

  signOut(){
    console.log('343434');
    firebase.auth().signOut();
    this.token = null;
  }

}
