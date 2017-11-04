import {Injectable} from '@angular/core';
import {Recipe}  from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
   
    recipes :Recipe[] = [
        new Recipe('Test Recipe','Very tasty recipe',
        'assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg',
        [
            new Ingredient('Biscuit',10), new Ingredient('Chips',20)
        ]
    ),
        new Recipe('Test Recipe',
        'Very tasty recipe',
        'assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg',
        [
            new Ingredient('Meat',10), new Ingredient('Fries',20)
        ])
      ];

      constructor(private splService:ShoppingListService){

      }
      getRecipes(){
          return this.recipes;
      }
      getRecipe(id:number){

          return this.recipes.slice()[id];
      }
      addIngredienttoSpl(ingredients:Ingredient[]){
        this.splService.addIngredientsToSpl(ingredients);
      }
      
      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
      }

      updateRecipe(index : number,recipe:Recipe){
          this.recipes[index]=recipe;
      }
      deleteRecipe(index : number){
          this.recipes.splice(index,1);
      }
}