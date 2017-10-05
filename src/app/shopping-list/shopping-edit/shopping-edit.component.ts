import { Component, OnInit,Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription : Subscription;
  editedIndex : number;
  editMode :boolean = false;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
   this.subscription =  this.shoppingListService.startedEditing
          .subscribe((index:number)=>{
            this.editedIndex = index;
            this.editMode = true;
          });
  }
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);

    //this.ingredientAdded.emit(newIngredient);
    //this.shoppingListService.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
