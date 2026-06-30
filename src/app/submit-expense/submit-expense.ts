import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import {Location} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { Subscription } from 'rxjs';

enum QBOClass {
  Administration = 'Administration',
  CommercialService = 'Commercial Service',
  Solar = 'Solar',
  Service = 'Service'
}


@Component({
  selector: 'app-submit-expense',
  imports: [MatToolbarModule, 
    MatFormFieldModule, MatInputModule, MatStepperModule, ReactiveFormsModule, MatButtonModule, MatIcon, MatSelectModule, MatDatepickerModule, MatRadioModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './submit-expense.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './submit-expense.css',
})
export class SubmitExpense implements OnInit {
  QBOClass = QBOClass; // Expose the enum to the template
  constructor(public location: Location, public snackBar: MatSnackBar) {}

  //Projects are handled differently, need to figure out what can be collected for them and prompt user if the expense is related to a project. If it is, then we need to collect the project name and number. If not, then we can skip that step.

  basicAmountForm = new FormGroup({
    preTaxAmount: new FormControl<string>('', [Validators.required]),
    pst: new FormControl<string>(''),
    gst: new FormControl<string>('')
  });

  otherAmountsForm = new FormGroup({
    otherTax: new FormControl<string>(''),
    tips: new FormControl<string>('')
  });

  qboCategoryList = ['category1', 'category2', 'category3', 'Meals & Entertainment'];
  qboCustomerProjectList = ['project1', 'project2', 'project3'];
  qboClassList = Object.values(QBOClass);

  //If the category is mealsAndEntertainment, need to know the meal type: restaurant/takeout or other
  //Restaurant meals or takeout can be claimed on taxes, so the type will affect the tax code used on the final bill
  accountingInfoForm = new FormGroup({
    isProjectExpense: new FormControl<boolean>(false),
    category: new FormControl<string>('', [Validators.required]),
    claimableMealType: new FormControl<boolean>(false),   
    customerProject: new FormControl<string>(''), //Only for project related expenses
    qboClass: new FormControl<QBOClass | null>(QBOClass.Solar) //If project expense, then this will always be 'Projects'
  });

  
  //Need additional control for file upload

  additionalInfoForm = new FormGroup({
    date: new FormControl(new Date()),
    description: new FormControl('')
  });

  isMealCategory: boolean = false;
  isProjectExpense: boolean = false;
  accountingInfoSubscription!: Subscription;

  ngOnInit() {
    this.accountingInfoSubscription = this.accountingInfoForm.valueChanges.subscribe(value => {
      console.log(value)
      if (this.isProjectExpense != value.isProjectExpense) {
        this.isProjectExpense = value.isProjectExpense!;
        if (this.isProjectExpense) {

          this.accountingInfoForm.get('qboClass')?.disable({ emitEvent: false });
          //Customer/Project is now a required field
          this.accountingInfoForm.get('customerProject')?.enable({emitEvent: false });
          this.accountingInfoForm.get('customerProject')?.setValidators([Validators.required]);
        } else {
          this.accountingInfoForm.get('qboClass')?.enable({ emitEvent: false });
          this.accountingInfoForm.get('qboClass')?.setValue(null, { emitEvent: false });
          this.accountingInfoForm.get('qboClass')?.setValidators([Validators.required]);
          this.accountingInfoForm.get('customerProject')?.disable({ emitEvent: false });
          this.accountingInfoForm.get('customerProject')?.clearValidators();
          this.accountingInfoForm.get('customerProject')?.setValue('', { emitEvent: false });
        }
      }

      this.isMealCategory = value.category?.toLocaleLowerCase().includes('meals & entertainment') || false;
      
      this.accountingInfoForm.updateValueAndValidity({ emitEvent: false });
    });
  }

  

  submitExpenseForm() {
    this.snackBar.open('Expense submitted successfully!', 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }


  forbidNonNumericInput(event: any) {
    const input = event.target;
    const value = input.value;
    const numericValue = value.replace(/[^0-9.]/g, '');
    if (numericValue !== value) {
      input.value = numericValue;
    }
  }
}
