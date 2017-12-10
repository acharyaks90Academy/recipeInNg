import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes.component';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipeRoutes : Routes = [
    
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]
})

export class RecipeRoutingModule {
   
}