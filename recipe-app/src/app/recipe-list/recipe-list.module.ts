import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListRoutingModule } from './recipe-list-routing.module';
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
