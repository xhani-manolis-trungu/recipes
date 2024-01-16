import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic', 'Olive Oil', 'Herbs'],
      instructions: 'Cook spaghetti, brown beef, sauté onion and garlic, add tomato sauce, mix with spaghetti, and garnish with herbs.',
    },
    {
      id: 2,
      name: 'Chicken Caesar Salad',
      ingredients: ['Chicken Breast', 'Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
      instructions: 'Grill chicken, chop lettuce, mix with croutons, Parmesan cheese, and Caesar dressing.',
    },
    {
      id: 3,
      name: 'Vegetarian Stir-Fry',
      ingredients: ['Tofu', 'Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce', 'Ginger', 'Garlic'],
      instructions: 'Stir-fry tofu and vegetables with soy sauce, ginger, and garlic until cooked.',
    },
  ];

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  updateRecipe(updatedRecipe: Recipe): void {
    const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
    }
  }

  deleteRecipe(id: number): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
