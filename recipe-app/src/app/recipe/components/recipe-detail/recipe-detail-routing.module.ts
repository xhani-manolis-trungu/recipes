// src/app/recipe/components/recipe-detail-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail.component';

const routes: Routes = [
  { path: '', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDetailRoutingModule {}
