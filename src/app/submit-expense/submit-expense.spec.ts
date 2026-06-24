import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitExpense } from './submit-expense';

describe('SubmitExpense', () => {
  let component: SubmitExpense;
  let fixture: ComponentFixture<SubmitExpense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitExpense],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitExpense);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
