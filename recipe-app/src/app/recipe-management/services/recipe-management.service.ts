// src/app/recipe-management/services/recipe-management.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeManagementService {
  constructor(
    private recipeService: RecipeService
  ) {}

  // Function to get the list of recipes
  getRecipes(): Observable<Recipe[]> {
    return this.recipeService.getAllRecipes();
  }

  // Function to add a new recipe
  addRecipe(newRecipe: Recipe): Observable<Recipe> {
    return this.recipeService.addRecipeAndUpdateState(newRecipe);
  }

  // Function to delete a recipe by ID
  deleteRecipe(recipeId: string) {
    return this.recipeService.deleteRecipeAndUpdateState(recipeId);
  }
}
