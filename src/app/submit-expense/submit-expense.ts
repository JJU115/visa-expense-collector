import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatIcon } from "@angular/material/icon";
import {Location} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-submit-expense',
  imports: [MatToolbarModule, 
    MatFormFieldModule, MatInputModule, MatStepperModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule, MatIcon, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './submit-expense.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './submit-expense.css',
})
export class SubmitExpense {

  constructor(public location: Location) {}

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
    description: new FormControl(''),
    date: new FormControl(new Date())
  });
}
