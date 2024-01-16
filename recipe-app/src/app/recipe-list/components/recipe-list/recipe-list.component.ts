import { Component } from '@angular/core';
import { Recipe } from '../../../recipe/models/recipe.model';
import { RecipeList } from '../../models/recipe-list.model';
import { RecipeListService } from '../../services/recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeLists: RecipeList[] = [];

  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.recipeLists = this.recipeListService.getAllRecipeLists();
  }
}
