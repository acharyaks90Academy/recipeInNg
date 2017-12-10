import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';

import {AuthService} from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';



const appRoutes : Routes = [ 
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, 
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