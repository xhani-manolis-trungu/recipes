import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeDetailRoutingModule } from './recipe-detail-routing.module';
import { RecipeListService } from '../../../recipe-list/services/recipe-list.service';
import { RecipeListModule } from '../../../recipe-list/recipe-list.module';



@NgModule({
  declarations: [RecipeDetailComponent],
  imports: [
    CommonModule,
    RecipeDetailRoutingModule
  ]
})
export class RecipeDetailModule { }
