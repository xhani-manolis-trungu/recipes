import { Injectable } from '@angular/core';
import { RecipeList } from '../models/recipe-list.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  private recipeLists: RecipeList[] = [
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

  getAllRecipeLists(): RecipeList[] {
    return this.recipeLists;
  }

  getRecipeListById(id: number): RecipeList | undefined {
    return this.recipeLists.find(recipeList => recipeList.id === id);
  }

  addRecipeList(recipeList: RecipeList): void {
    this.recipeLists.push(recipeList);
  }

  updateRecipeList(updatedRecipeList: RecipeList): void {
    const index = this.recipeLists.findIndex(recipeList => recipeList.id === updatedRecipeList.id);
    if (index !== -1) {
      this.recipeLists[index] = updatedRecipeList;
    }
  }

  deleteRecipeList(id: number): void {
    this.recipeLists = this.recipeLists.filter(recipeList => recipeList.id !== id);
  }
}
