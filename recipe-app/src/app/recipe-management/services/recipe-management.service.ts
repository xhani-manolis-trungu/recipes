// src/app/recipe-management/services/recipe-management.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from '../../recipe/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeManagementService {
  private recipes: Recipe[] = [
    { id: 1, name: 'Pasta Carbonara', ingredients: ['Pasta', 'Bacon', 'Eggs', 'Parmesan'], instructions: 'Cook pasta, fry bacon, mix with eggs and Parmesan.' },
    { id: 2, name: 'Chicken Stir-Fry', ingredients: ['Chicken', 'Vegetables', 'Soy Sauce'], instructions: 'Stir-fry chicken and vegetables, add soy sauce.' },
    // Add more initial recipes if needed
  ];

  constructor() {}

  // Function to get the list of recipes
  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Return a copy to prevent direct modification
  }

  // Function to add a new recipe
  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
  }

  // Function to delete a recipe by ID
  deleteRecipe(recipeId: number): void {
    const index = this.recipes.findIndex((recipe) => recipe.id === recipeId);
    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
  }
}
