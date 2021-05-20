import { TestBed } from '@angular/core/testing';

import { TopHistoryService } from './top-history.service';

describe('TopHistoryService', () => {
  let service: TopHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
