import { TestBed } from '@angular/core/testing';

import { CategoryRepository } from './category-repository.service';

describe('CategoryRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryRepository = TestBed.get(CategoryRepository);
    expect(service).toBeTruthy();
  });
});
