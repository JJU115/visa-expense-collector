import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import {Location} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-submit-expense',
  imports: [MatToolbarModule, 
    MatFormFieldModule, MatInputModule, MatStepperModule, ReactiveFormsModule, MatButtonModule, MatIcon, MatSelectModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './submit-expense.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './submit-expense.css',
})
export class SubmitExpense {

  constructor(public location: Location, public snackBar: MatSnackBar) {}

  basicAmountForm = new FormGroup({
    preTaxAmount: new FormControl(),
    pst: new FormControl(),
    gst: new FormControl()
  });

  otherAmountsForm = new FormGroup({
    otherTax: new FormControl(),
    tips: new FormControl()
  });

  qboCategoryList = ['category1', 'category2', 'category3'];
  qboCustomerProjectList = ['project1', 'project2', 'project3'];
  qboClassList = ['class1', 'class2', 'class3'];

  accountingInfoForm = new FormGroup({
    category: new FormControl(''),
    customerProject: new FormControl(''),
    qboClass: new FormControl('')
  });

  additionalInfoForm = new FormGroup({
    date: new FormControl(new Date()),
    description: new FormControl('')
  });



  submitExpenseForm() {
    this.snackBar.open('Expense submitted successfully!', 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }
}
