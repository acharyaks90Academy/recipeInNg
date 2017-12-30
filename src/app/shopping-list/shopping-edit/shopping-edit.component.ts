import { 
  Component,
   OnInit,
  OnDestroy,
   ViewChild 
  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  
 
  @ViewChild('f') slForm :NgForm;
  subscription : Subscription;
  editedIndex : number;
  editMode :boolean = false;
  editedItem: Ingredient;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
   this.subscription =  this.shoppingListService.startedEditing
          .subscribe((index:number)=>{
            this.editedIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.slForm.setValue({
              name:this.editedItem.name,
              amount:this.editedItem.amount
            });
          });
  }
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);

  
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;

    form.reset();
   
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
