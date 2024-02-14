import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeStateService {

  private recipeDeletedSubject = new Subject<string>();

  recipeDeleted$ = this.recipeDeletedSubject.asObservable();

  private recipeAddedSubject = new Subject<Recipe>();

  recipeAdded$ = this.recipeAddedSubject.asObservable();

  deleteRecipe(recipeId: string): void {
    // Notify subscribers about the deleted recipe
    this.recipeDeletedSubject.next(recipeId);
  }

  addRecipe(recipe: Recipe): void {
    // Notify subscribers about the deleted recipe
    this.recipeAddedSubject.next(recipe);
  }
}
