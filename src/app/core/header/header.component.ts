import { Component, OnInit } from '@angular/core';
import {DataStorageService}  from '../../shared/data-storage.service';
//import {HttpEvent} from '@angular/common/http';
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
      .subscribe((response )=>{
      console.log(response);
    })
  }

  fetchData(){
    this.dataservice.getRecipes();
  }
  
  logOut(){
    this.authService.signOut();
  }



}
