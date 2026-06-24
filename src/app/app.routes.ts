import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Menu } from './menu/menu';
import { ExpenseList } from './expense-list/expense-list';
import { SubmitExpense } from './submit-expense/submit-expense';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'Menu',
        component: Menu
    },
    {
        path: 'expense-list',
        component: ExpenseList
    }, 
    {
        path: 'submit-expense',
        component: SubmitExpense
    },
    {
        path: '*',
        component: Menu
    }
];
