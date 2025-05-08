import { Routes } from '@angular/router';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'admin-login', pathMatch: 'full' },
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'dashboard', component: StudentcrudComponent, canActivate: [AuthGuard] }
  ];
