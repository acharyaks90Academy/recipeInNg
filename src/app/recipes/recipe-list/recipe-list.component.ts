import { Component, OnInit,Output , EventEmitter} from '@angular/core';
import { Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
   recipes :Recipe[] ; //= [
  //   new Recipe('Test Recipe','Very tasty recipe','assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg'),
  //   new Recipe('Test Recipe','Very tasty recipe','assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg')
  // ];
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
