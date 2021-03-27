import { TestBed } from '@angular/core/testing';

import { LoginsignupGuard } from './loginsignup.guard';

describe('LoginsignupGuard', () => {
  let guard: LoginsignupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginsignupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
