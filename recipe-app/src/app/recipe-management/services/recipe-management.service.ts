// src/app/recipe-management/services/recipe-management.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from '../../recipe/models/recipe.model';
import { RecipeService } from '../../recipe/services/recipe.service';
import { Observable } from 'rxjs';
import { RecipeStateService } from '../../shared/services/recipe-state.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeManagementService {
  constructor(private recipeService: RecipeService, private recipeDeleted: RecipeStateService) {}

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
