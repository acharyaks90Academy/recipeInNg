import { Component, OnInit,Output , EventEmitter, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  subscription : Subscription;
   recipes :Recipe[] ; //= [
  //   new Recipe('Test Recipe','Very tasty recipe','assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg'),
  //   new Recipe('Test Recipe','Very tasty recipe','assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg')
  // ];
  constructor(private recipeService:RecipeService, 
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged
    .subscribe((recipes:Recipe[])=>{
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
