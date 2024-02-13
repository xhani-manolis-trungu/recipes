import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeDetailRoutingModule } from './recipe-detail-routing.module';
import { RecipeDetailComponent } from './recipe-detail.component';



@NgModule({
  declarations: [RecipeDetailComponent],
  imports: [
    CommonModule,
    RecipeDetailRoutingModule
  ]
})
export class RecipeDetailModule { }
