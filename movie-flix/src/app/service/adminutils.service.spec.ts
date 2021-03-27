import { TestBed } from '@angular/core/testing';

import { AdminutilsService } from './adminutils.service';

describe('AdminutilsService', () => {
  let service: AdminutilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminutilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
