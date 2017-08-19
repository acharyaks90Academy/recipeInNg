import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient>();
    ingredients :Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tommatoes',10)
      ];

      getIngredients(){
          return this.ingredients
      }
}