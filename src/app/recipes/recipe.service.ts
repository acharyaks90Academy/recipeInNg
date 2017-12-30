import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
   recipeChanged = new Subject<Recipe[]>();
    recipes :Recipe[] = [
        new Recipe('Test Recipe','Very Spicy recipe',
        'assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg',
        [
            new Ingredient('Biscuit', 10), new Ingredient('Chips',20)
        ]
    ),
        new Recipe('Normal Recipe',
        'Very tousted recipe',
        'assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg',
        [
            new Ingredient('Meat', 10), new Ingredient('Fries', 20)
        ])
      ];

      constructor(private splService:ShoppingListService) {

      }
      getRecipes(){
          return this.recipes.slice();
      }

      setRecipes(recipest: Recipe[]){

          console.log('asa',this.recipes,'...new',recipest);
          this.recipes.length = 0;
          this.recipes = recipest;
          this.recipeChanged.next(this.recipes.slice());
      }
      getRecipe(id: number) {
          return this.recipes.slice()[id];
      }
      addIngredienttoSpl(ingredients: Ingredient[]) {
        this.splService.addIngredientsToSpl(ingredients);
      }
      
      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index : number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipeChanged.next(this.recipes.slice());

      }
      deleteRecipe(index : number){
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());

      }
}