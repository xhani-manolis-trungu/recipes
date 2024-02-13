// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./recipe-list/recipe-list.module').then(m => m.RecipeListModule)},
  { path: 'recipe-list', loadChildren: () => import('./recipe-list/recipe-list.module').then(m => m.RecipeListModule) },
  { path: 'management', loadChildren: () => import('./recipe-management/recipe-management.module').then(m => m.RecipeManagementModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
