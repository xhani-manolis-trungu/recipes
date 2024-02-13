import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RecipeFormComponent } from '../recipe/components/recipe-form/recipe-form.component';
import { RecipeManagementComponent } from './components/recipe-management/recipe-management.component';
import { RecipeManagementRoutingModule } from './recipe-management-routing.module';
import { RecipeManagementService } from './services/recipe-management.service';


@NgModule({
  declarations: [RecipeManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecipeManagementRoutingModule,
    RecipeFormComponent
  ],
  providers: [RecipeManagementService]
})
export class RecipeManagementModule { }
