import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Http,Response} from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import  'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private recipeService: RecipeService, private http: Http, private authserve: AuthService) {

   }


   storeRecipes(){
     const token = this.authserve.getToken();
     return this.http.put('https://ng-book-73259.firebaseio.com/recipes.json?auth=' + token,
       this.recipeService.getRecipes() );
   }

   getRecipes(){
     const token = this.authserve.getToken();
     this.http.get('https://ng-book-73259.firebaseio.com/recipes.json?auth=' + token)
     .map((response:Response)=>{
        const recipes : Recipe[] = response.json();
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
