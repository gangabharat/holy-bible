import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleBookComponent } from './bible-book.component';

describe('BibleBookComponent', () => {
  let component: BibleBookComponent;
  let fixture: ComponentFixture<BibleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
