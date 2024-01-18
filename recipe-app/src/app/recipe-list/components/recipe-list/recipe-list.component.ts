import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, distinctUntilChanged, finalize, map, merge, mergeAll, of, switchMap, takeUntil } from 'rxjs';
import { RecipeList } from '../../models/recipe-list.model';
import { RecipeListService } from '../../services/recipe-list.service';
import { RecipeStateService } from '../../../shared/services/recipe-state.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeList: Observable<RecipeList[] >| undefined;

  private destroy$ = new Subject<void>();

  constructor(
    private recipeListService: RecipeListService,
    private recipeStateService: RecipeStateService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllRecipeLists();

    merge(
      this.recipeStateService.recipeDeleted$,
      this.recipeStateService.recipeAdded$
    ).pipe(distinctUntilChanged()).subscribe(() => this.getAllRecipeLists());
  }

  getAllRecipeLists() {
    this.recipeList = this.recipeListService.getAllRecipeLists();
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
