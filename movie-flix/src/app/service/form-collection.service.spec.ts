import { TestBed } from '@angular/core/testing';

import { FormCollectionService } from './form-collection.service';

describe('FormCollectionService', () => {
  let service: FormCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
