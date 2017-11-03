import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
    ingredientAdded = new Subject<Ingredient>();
    startedEditing = new Subject<number>();
    ingredients :Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tommatoes',10)
      ];

      getIngredients(){
          return this.ingredients
      }

      getIngredient(index:number){
          return this.ingredients[index];
      }
      updateIngredient(index:number, newIngredient:Ingredient){
          this.ingredients[index] = newIngredient;
      }
      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
      }
      addIngredientsToSpl(ingredientsM:Ingredient[]){
        // for(let ingredient of ingredients ){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredientsM);
      }

}