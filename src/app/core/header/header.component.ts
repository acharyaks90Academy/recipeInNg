import { Component, OnInit } from '@angular/core';
import {DataStorageService}  from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataservice: DataStorageService, private authService : AuthService) { }

  ngOnInit() {
  }

  saveData(){
    this.dataservice.storeRecipes()
    .subscribe((response:Response)=>{
      console.log(response);
    })
  }

  fetchData(){
    this.dataservice.getRecipes();
  }
  
  logOut(){
    this.authService.signOut();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  

}
