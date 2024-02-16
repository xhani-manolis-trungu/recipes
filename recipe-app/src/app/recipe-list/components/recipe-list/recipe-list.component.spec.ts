import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { ModalComponentComponent } from '../../../shared/components/modals/modal-component/modal-component.component';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeStateService } from '../../../shared/services/recipe-state.service';
import { RecipeService } from '../../../shared/services/recipe.service';
import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let mockRecipeService: Partial<RecipeService>;
  let mockRecipeStateService: Partial<RecipeStateService>;
  let mockRouter: Partial<Router>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  const recipeList: Partial<Recipe>[] = [
    { id: '1', name: 'Recipe 1', instructions: 'Description 1', ingredients: ['test'] },
    { id: '2', name: 'Recipe 2', instructions: 'Description 2', ingredients: ['test'] },
  ];

  beforeEach(async () => {
    mockRecipeService = {
      getAllRecipes: jest.fn(() => of(recipeList as Recipe[])),
    };

    mockRecipeStateService = {
      recipeDeleted$: new BehaviorSubject<any>(null),
      recipeAdded$: new BehaviorSubject<Recipe | any>(null),
    };

    mockRouter = {
      navigate: jest.fn(),
    };

    mockActivatedRoute = {};

    await TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      imports: [
        HttpClientTestingModule,
        RouterModule,
        ModalComponentComponent
      ],
      providers: [
        { provide: RecipeService, useValue: mockRecipeService },
        { provide: RecipeStateService, useValue: mockRecipeStateService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllRecipeLists on initialization', () => {
    const getAllRecipeListsSpy = jest.spyOn(component, 'getAllRecipeLists');
    component.ngOnInit();
    expect(getAllRecipeListsSpy).toHaveBeenCalled();
  });

  it('should call getAllRecipeLists when recipeDeleted$ emits', () => {
    const getAllRecipeListsSpy = jest.spyOn(component, 'getAllRecipeLists');
    component.ngOnInit();
    mockRecipeStateService.recipeDeleted$ = new BehaviorSubject<Recipe | any>(null);
    expect(getAllRecipeListsSpy).toHaveBeenCalledTimes(2); // Called on initialization and when recipeDeleted$ emits
  });

  it('should call getAllRecipeLists when recipeAdded$ emits', () => {
    const getAllRecipeListsSpy = jest.spyOn(component, 'getAllRecipeLists');
    component.ngOnInit();
    mockRecipeStateService.recipeAdded$ = new BehaviorSubject<Recipe | any>(null);
    expect(getAllRecipeListsSpy).toHaveBeenCalledTimes(2); // Called on initialization and when recipeAdded$ emits
  });

  it('should load recipe list on ngOnInit', () => {
    expect(mockRecipeService.getAllRecipes).toHaveBeenCalled();
    expect(component.recipeList).toBeDefined();
  });

  it('should navigate to recipe detail', () => {
    const recipeId = '1';
    component.navigateToRecipeDetail(recipeId);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['detail', recipeId], {
      relativeTo: mockActivatedRoute,
      skipLocationChange: true,
    });
  });

  it('should navigate to recipe management', () => {
    component.navigateToRecipeManagement();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['management'], {
      skipLocationChange: true,
    });
  });

  it('should open modal with recipe data', () => {
    const toggleModalSpy = jest.spyOn(component, 'toggleModal');
    component.openModal(recipeList[0] as Recipe);
    fixture.detectChanges();
    expect(component.isModalOpen).toBeTruthy();
    expect(component.dynamicData).toEqual(recipeList[0]);
    expect(toggleModalSpy).toHaveBeenCalled();
  });

  it('should close modal', () => {
    component.isModalOpen = true;
    component.toggleModal();
    expect(component.isModalOpen).toBeFalsy();
  });
});
