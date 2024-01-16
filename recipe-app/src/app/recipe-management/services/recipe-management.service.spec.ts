import { TestBed } from '@angular/core/testing';

import { RecipeManagementService } from './recipe-management.service';

describe('RecipeManagementService', () => {
  let service: RecipeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
