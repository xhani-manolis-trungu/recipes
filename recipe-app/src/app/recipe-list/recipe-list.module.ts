
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { ToggleServiceService } from '../shared/services/toggle-service.service';
import { RecipeService } from '../shared/services/recipe.service';
import { ModalComponentComponent } from '../shared/components/modals/modal-component/modal-component.component';


@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule,
    RecipeListRoutingModule,
    ModalComponentComponent
  ],
  providers: [RecipeService, ToggleServiceService]
})
export class RecipeListModule { }
