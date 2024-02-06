import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeListService } from './recipe-list.service';

describe('RecipeListService', () => {
  let service: RecipeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RecipeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
