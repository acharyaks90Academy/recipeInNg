import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';
import { HomeComponent } from './home/home.component';




const appRoutes : Routes = [ 
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component:HomeComponent  }, 
     { path:'shopping-list', component:ShoppingListComponent},
]; 

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule {

}