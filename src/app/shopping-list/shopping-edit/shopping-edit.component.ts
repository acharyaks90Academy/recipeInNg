import { Component, OnInit, ViewChild,ElementRef,Output, EventEmitter } from '@angular/core';
import { Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const nameIng = this.nameInputRef.nativeElement.value;
    const amtIng = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameIng,amtIng);

    //this.ingredientAdded.emit(newIngredient);
    //this.shoppingListService.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
