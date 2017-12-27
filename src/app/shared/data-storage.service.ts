import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient} from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import  'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private recipeService: RecipeService, private httpClient: HttpClient, private authserve: AuthService) {

   }


   storeRecipes(){
     const token = this.authserve.getToken();
     return this.httpClient.put('https://ng-book-73259.firebaseio.com/recipes.json?auth=' + token,
       this.recipeService.getRecipes() );
   }

   getRecipes(){
     const token = this.authserve.getToken();
     this.httpClient.get<Recipe[]>('https://ng-book-73259.firebaseio.com/recipes.json?auth=' + token,{
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
