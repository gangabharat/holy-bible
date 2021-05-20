import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomComponent } from './commom.component';

describe('CommomComponent', () => {
  let component: CommomComponent;
  let fixture: ComponentFixture<CommomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
