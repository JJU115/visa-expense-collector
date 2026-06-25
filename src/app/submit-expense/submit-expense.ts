import { Component, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {form, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-submit-expense',
  imports: [MatToolbarModule, MatFormFieldModule, FormField],
  templateUrl: './submit-expense.html',
  styleUrl: './submit-expense.css',
})
export class SubmitExpense {

  expenseModel = signal({
    description: '',
    amount: 0,
    date: new Date(),
  });

  expenseForm = form(this.expenseModel);
}
