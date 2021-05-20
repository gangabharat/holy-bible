import { TestBed } from '@angular/core/testing';

import { TestStoreService } from './test-store.service';

describe('TestStoreService', () => {
  let service: TestStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
