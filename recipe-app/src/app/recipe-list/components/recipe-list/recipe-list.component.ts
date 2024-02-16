import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, distinctUntilChanged, merge } from 'rxjs';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeStateService } from '../../../shared/services/recipe-state.service';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  toggleServiceKey: string | undefined;
  recipeList: Observable<Recipe[] >| undefined;
  isModalOpen: boolean = false;
  dynamicData: any;

  private destroy$ = new Subject<void>();

  constructor(
    private recipeListService: RecipeService,
    private recipeStateService: RecipeStateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllRecipeLists();

    merge(
      this.recipeStateService.recipeDeleted$,
      this.recipeStateService.recipeAdded$
    ).pipe(distinctUntilChanged()).subscribe(() => {
      return this.getAllRecipeLists()
    });
  }

  openModal(recipe: Recipe) {
    this.dynamicData = { ...recipe };
    this.toggleModal();
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  getAllRecipeLists() {
    this.recipeList = this.recipeListService.getAllRecipes();
  }

  navigateToRecipeDetail(recipeId: string): void {
    this.router.navigate(['detail', recipeId], {relativeTo: this.route ,skipLocationChange: true});
  }

  navigateToRecipeManagement(): void {
    this.router.navigate(['management'], {skipLocationChange: true});
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }
}
