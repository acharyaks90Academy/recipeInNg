import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {AuthService} from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';



const appRoutes : Routes = [ 
     {path :'',redirectTo:'/recipes',pathMatch:'full'},
     { path:'recipes', component:RecipesComponent, children:[
            { path:'', component:RecipeStartComponent},
            { path:'new', component:RecipeEditComponent},
            { path:':id', component:RecipeDetailsComponent},
            { path:':id/edit', component:RecipeEditComponent}
                                                             ]    
     },
     { path:'shopping-list', component:ShoppingListComponent},
     { path: 'signup', component: SignupComponent},
     { path: 'signin', component: SigninComponent}
]; 

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule {

}