import { TestBed } from '@angular/core/testing';

import { FavouriteHistoryService } from './favourite-history.service';

describe('FavouriteHistoryService', () => {
  let service: FavouriteHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
