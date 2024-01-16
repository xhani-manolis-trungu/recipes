import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    const recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipeService.getRecipeById(recipeId);
  }
}
