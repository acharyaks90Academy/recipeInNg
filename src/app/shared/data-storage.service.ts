import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private recipeService: RecipeService, private httpClient: HttpClient, private authserve: AuthService) {

   }


   storeRecipes(){
     const token = this.authserve.getToken();
     //const headers = new HttpHeaders().set('Authorization','aaaa');
    //  return this.httpClient.put('https://ng-book-73259.firebaseio.com/recipes.json',
    //    this.recipeService.getRecipes(), {
    //      observe: 'body',
    //      params : new HttpParams().set('auth',token)
    //      //headers: headers
    //    } );
     const req = new HttpRequest('PUT', 'https://ng-book-73259.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true})
     
     return this.httpClient.request(req);
   }

   getRecipes(){
     
     this.httpClient.get<Recipe[]>('https://ng-book-73259.firebaseio.com/recipes.json',{
       observe:'body',
       responseType: 'json'
     })
     .map((recipes)=>{
        
        for(let recipe of recipes){
          if (!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
       return recipes;
     }) 
     .subscribe((recipes:Recipe[])=>{
        this.recipeService.setRecipes(recipes);
     }) 
   }
}
