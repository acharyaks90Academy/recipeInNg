import { Component , OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  feratureSelected = "recipe";
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCpdlBEjW8C07s2ZkUu2sr06QaPSdxBKmk",
      authDomain: "ng-book-73259.firebaseapp.com"
    });
  }
  onNavigate(feature:string){
    this.feratureSelected = feature;
  }
}
