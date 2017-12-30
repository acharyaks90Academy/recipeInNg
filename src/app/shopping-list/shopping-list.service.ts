import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService { 
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients :Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tommatoes',10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index:number) {
          return this.ingredients[index];
      }

      deleteIngredient(index:number) {
          this.ingredientAdded.next(this.ingredients.slice());
          return this.ingredients.splice(index,1);
         
      }
      updateIngredient(index:number, newIngredient:Ingredient) {
          this.ingredients[index] = newIngredient;
          this.ingredientAdded.next(this.ingredients.slice());
      }
      addIngredient(ingredient:Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientAdded.next(this.ingredients.slice());
      }
      addIngredientsToSpl(ingredientsM:Ingredient[]) {
        this.ingredients.push(...ingredientsM);
          this.ingredientAdded.next(this.ingredients.slice());
      }

}