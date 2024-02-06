import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeManagementService } from './recipe-management.service';

describe('RecipeManagementService', () => {
  let service: RecipeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RecipeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
