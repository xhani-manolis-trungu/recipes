import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
  standalone: true,
  providers: [RecipeService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class RecipeFormComponent {
  @Output() recipeAdded = new EventEmitter<any>();

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      name: [''],
      ingredients: [''],
      instructions: [''],
    });
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const newRecipe = {
        name: this.recipeForm.value.name,
        ingredients: this.recipeForm.value.ingredients.split(',').map((ingredient: string) => ingredient.trim()),
        instructions: this.recipeForm.value.instructions,
      };

      this.recipeAdded.emit(newRecipe);
      this.recipeForm.reset();
    }
  }
}
