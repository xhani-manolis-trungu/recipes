// recipe.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [RecipeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule
  ],
  providers: [RecipeService],
})
export class RecipeModule {}
