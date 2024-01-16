import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/recipe/recipes', pathMatch: 'full' },  // Adjust the path based on the actual route for RecipeModule
  { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'recipe-list', loadChildren: () => import('./recipe-list/recipe-list.module').then(m => m.RecipeListModule) },
  { path: 'recipe-management', loadChildren: () => import('./recipe-management/recipe-management.module').then(m => m.RecipeManagementModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
