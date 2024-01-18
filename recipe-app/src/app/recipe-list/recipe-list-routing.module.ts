// src/app/recipe-list/recipe-list-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent,
    children: [
      { path: 'detail/:id', loadChildren: () => import('../recipe/components/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailModule) },
      { path: 'management', loadChildren: () => import('../recipe-management/recipe-management.module').then(m => m.RecipeManagementModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeListRoutingModule {}
