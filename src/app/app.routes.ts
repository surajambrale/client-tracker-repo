import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'admin-login', pathMatch: 'full' },
    {
        path: 'admin-login',
        loadComponent: () =>
          import('./adminlogin/adminlogin.component').then(m => m.AdminLoginComponent),
      },
      {
        path: 'admin-dashboard',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./studentcrud/studentcrud.component').then(m => m.StudentcrudComponent), // if dashboard shows this
      }
  ];
