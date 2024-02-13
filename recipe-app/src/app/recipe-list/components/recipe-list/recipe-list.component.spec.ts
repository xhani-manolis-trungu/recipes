import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      imports: [HttpClientTestingModule, RouterModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({get: (id: string) => '123'})
        },
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
