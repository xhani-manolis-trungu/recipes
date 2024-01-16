import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeManagementComponent } from './components/recipe-management/recipe-management.component';

const routes: Routes = [
  { path: '', component: RecipeManagementComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeManagementRoutingModule { }
