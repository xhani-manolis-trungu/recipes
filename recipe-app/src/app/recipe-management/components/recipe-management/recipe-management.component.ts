import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeManagementService } from '../../services/recipe-management.service';

@Component({
  selector: 'app-recipe-management',
  templateUrl: './recipe-management.component.html',
  styleUrl: './recipe-management.component.css'
})
export class RecipeManagementComponent {
  recipes: Observable<Recipe[]> | undefined;

  constructor(private recipeManagementService: RecipeManagementService) {
    // Fetch initial list of recipes
    this.fetchRecipes();
  }

  // Function to fetch recipes from the service
  fetchRecipes(): void {
    this.recipes = this.recipeManagementService.getRecipes();
  }

  // Function to handle adding a new recipe
  onRecipeAdded(recipe: Recipe): void {
    this.recipeManagementService.addRecipe(recipe).subscribe(() => this.fetchRecipes());
  }

  // Function to handle deleting a recipe
  onDeleteRecipe(recipeId: string): void {
    this.recipeManagementService.deleteRecipe(recipeId).subscribe(() => this.fetchRecipes());
  }
}
