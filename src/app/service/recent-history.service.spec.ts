import { TestBed } from '@angular/core/testing';

import { RecentHistoryService } from './recent-history.service';

describe('RecentHistoryService', () => {
  let service: RecentHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
