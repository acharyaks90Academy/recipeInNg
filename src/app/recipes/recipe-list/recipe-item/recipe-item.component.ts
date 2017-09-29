import { Component, OnInit, Input,Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  @Output() recipeSelected = new Subject<Recipe>(); 
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeSelected.next(this.recipe);
    //this.recipeSelected.emit();
  }

}
