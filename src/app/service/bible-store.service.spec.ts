import { TestBed } from '@angular/core/testing';

import { BibleStoreService } from './bible-store.service';

describe('BibleStoreService', () => {
  let service: BibleStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
