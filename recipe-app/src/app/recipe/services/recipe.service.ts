import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { RecipeStateService } from '../../shared/services/recipe-state.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient, private recipeStateService: RecipeStateService) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

  updateRecipe(updatedRecipe: Recipe): Observable<Recipe> {
    const url = `${this.apiUrl}/${updatedRecipe.id}`;
    return this.http.put<Recipe>(url, updatedRecipe);
  }

  deleteRecipe(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Update this method to use RecipeStateService
  deleteRecipeAndUpdateState(id: string): Observable<void> {
    // Notify subscribers about the deleted recipe
    this.recipeStateService.deleteRecipe(id);
    return this.deleteRecipe(id);
  }

  addRecipeAndUpdateState(recipe: Recipe): Observable<Recipe> {
    // Notify subscribers about the deleted recipe
    this.recipeStateService.addRecipe(recipe);
    return this.addRecipe(recipe);
  }
}
