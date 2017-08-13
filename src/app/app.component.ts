import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  feratureSelected = "recipe";
  onNavigate(feature:string){
    this.feratureSelected = feature;
  }
}
