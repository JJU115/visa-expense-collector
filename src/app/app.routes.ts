import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Menu } from './menu/menu';
import { ExpenseList } from './expense-list/expense-list';
import { SubmitExpense } from './submit-expense/submit-expense';
import { Settings } from './settings/settings';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'menu',
        component: Menu
    },
    {
        path: 'settings',
        component: Settings
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
        path: '**',
        component: Menu
    }
];
