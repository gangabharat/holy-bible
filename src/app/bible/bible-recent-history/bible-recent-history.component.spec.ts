import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleRecentHistoryComponent } from './bible-recent-history.component';

describe('BibleRecentHistoryComponent', () => {
  let component: BibleRecentHistoryComponent;
  let fixture: ComponentFixture<BibleRecentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleRecentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleRecentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
