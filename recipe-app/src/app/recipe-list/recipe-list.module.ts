import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListService } from './services/recipe-list.service';


@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule,
    RecipeListRoutingModule
  ],
  providers: [RecipeListService]
})
export class RecipeListModule { }
