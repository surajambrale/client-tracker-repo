import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const expiry = Number(localStorage.getItem('expiry'));

    //ye line hata do normal ho jayega, timer hat jayega
  const now = new Date().getTime();
  //ye line hata do normal ho jayega, timer hat jayega
    if (!isLoggedIn || !expiry || now > expiry) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('expiry');
    this.router.navigate(['/admin-login']);
    return false;
  }
    return true;
  }
}
