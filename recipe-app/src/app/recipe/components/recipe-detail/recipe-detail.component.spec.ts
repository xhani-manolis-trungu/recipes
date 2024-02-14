import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';
import { RecipeDetailComponent } from './recipe-detail.component';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;
  let mockRecipeService: jest.Mocked<RecipeService>;
  const mockActivatedRoute = {
    params: of({ id: '1' })
  };

  beforeEach(waitForAsync(() => {
    mockRecipeService = {
      getRecipeById: jest.fn()
    } as unknown as jest.Mocked<RecipeService>;

    TestBed.configureTestingModule({
      declarations: [RecipeDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: RecipeService, useValue: mockRecipeService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch recipe on ngOnInit', () => {
    const recipe: Recipe = { id: '1', name: 'Test Recipe', ingredients: [], instructions: '' };
    mockRecipeService.getRecipeById.mockReturnValue(of(recipe));

    component.ngOnInit();

    // Subscribe to the observable and check the emitted value
    component.recipe?.subscribe((emittedRecipe) => {
      expect(emittedRecipe).toEqual(recipe);
    });

    expect(mockRecipeService.getRecipeById).toHaveBeenCalledWith('1');
  });
});
