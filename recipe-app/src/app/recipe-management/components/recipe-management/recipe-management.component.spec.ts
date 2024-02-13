import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeFormComponent } from '../../../recipe/components/recipe-form/recipe-form.component';
import { RecipeManagementComponent } from './recipe-management.component';

describe('RecipeManagementComponent', () => {
  let component: RecipeManagementComponent;
  let fixture: ComponentFixture<RecipeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeManagementComponent],
      imports: [HttpClientTestingModule, RecipeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
