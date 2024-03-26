import { Routes } from '@angular/router';
import { LoginComponent } from './emp/login/login.component';
import { RegComponent } from './emp/reg/reg.component';

export const routes: Routes = [
     {path:'emp',
     loadChildren:()=> import('./emp/emp.module').then(m=>m.EmpModule)}
];
