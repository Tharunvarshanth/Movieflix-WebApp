import { TestBed } from '@angular/core/testing';

import { DatascienceService } from './datascience.service';

describe('DatascienceService', () => {
  let service: DatascienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatascienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
