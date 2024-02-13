// src/app/recipe-list/services/recipe-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeList } from '../models/recipe-list.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  getAllRecipeLists(): Observable<RecipeList[]> {
    return this.http.get<RecipeList[]>(this.apiUrl);
  }

  getRecipeListById(id: number): Observable<RecipeList | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RecipeList | undefined>(url);
  }

  addRecipeList(recipeList: RecipeList): Observable<RecipeList> {
    return this.http.post<RecipeList>(this.apiUrl, recipeList);
  }

  updateRecipeList(updatedRecipeList: RecipeList): Observable<RecipeList> {
    const url = `${this.apiUrl}/${updatedRecipeList.id}`;
    return this.http.put<RecipeList>(url, updatedRecipeList);
  }

  deleteRecipeList(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
