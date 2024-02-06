import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecipeStateService } from './recipe-state.service';

describe('RecipeStateService', () => {
  let service: RecipeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RecipeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
