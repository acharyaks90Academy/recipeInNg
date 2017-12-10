import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule} from './recipes-routing.module'
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeDetailsComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent
       
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RecipeRoutingModule,
        SharedModule
    ]
})

export class RecipeModule {
    
}