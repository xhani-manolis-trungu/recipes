import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecipeListModule } from './recipe-list/recipe-list.module';
import { RecipeManagementModule } from './recipe-management/recipe-management.module';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule, RecipeModule, RecipeListModule, RecipeManagementModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
