import { Component } from '@angular/core';
import { Recipe } from '../../../recipe/models/recipe.model';
import { RecipeManagementService } from '../../services/recipe-management.service';

@Component({
  selector: 'app-recipe-management',
  templateUrl: './recipe-management.component.html',
  styleUrl: './recipe-management.component.css'
})
export class RecipeManagementComponent {
  recipes: Recipe[] = [];

  constructor(private recipeManagementService: RecipeManagementService) {
    // Fetch initial list of recipes
    this.fetchRecipes();
  }

  // Function to fetch recipes from the service
  fetchRecipes(): void {
    this.recipes = this.recipeManagementService.getRecipes();
  }

  // Function to handle adding a new recipe
  onRecipeAdded($e: Recipe): void {
    this.recipeManagementService.addRecipe($e);
    this.fetchRecipes(); // Refresh the list after adding a new recipe
  }

  // Function to handle deleting a recipe
  onDeleteRecipe(recipeId: number): void {
    this.recipeManagementService.deleteRecipe(recipeId);
    this.fetchRecipes(); // Refresh the list after deleting a recipe
  }
}
