import {Recipe}  from './recipe.model'
export class RecipeService{
    recipes :Recipe[] = [
        new Recipe('Test Recipe','Very tasty recipe','assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg'),
        new Recipe('Test Recipe','Very tasty recipe','assets/Easy-Avocado-Shrimp-Salad-Recipe.jpg')
      ];

      getRecipes(){
          return this.recipes;
      }
}