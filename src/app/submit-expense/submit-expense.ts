import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { form, FormField } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-submit-expense',
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, FormField],
  templateUrl: './submit-expense.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './submit-expense.css',
})
export class SubmitExpense {
  expenseModel = signal({
    description: '',
    amountDollars: 0,
    amountCents: 0,
    date: new Date(),
  });

  expenseForm = form(this.expenseModel);
}
