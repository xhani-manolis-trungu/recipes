import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Observable<Recipe> | undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.recipe = this.recipeService.getRecipeById(params['id']);
    })
  }
}
