import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleBookChapterComponent } from './bible-book-chapter.component';

describe('BibleBookChapterComponent', () => {
  let component: BibleBookChapterComponent;
  let fixture: ComponentFixture<BibleBookChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleBookChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleBookChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
