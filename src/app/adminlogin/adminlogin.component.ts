import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = { email: this.email, password: this.password };

    this.http.post('https://client-tracker-repo.onrender.com/admin/login', body)
      .subscribe((res: any) => {
        if (res.success) {
          //logout after 10 minutes logic starts here
         const now = new Date().getTime();
         const expiry = now + 1 * 60 * 1000; 
          //logout after 10 minutes logic starts here
          localStorage.setItem('isLoggedIn', 'true');

          //timer ki line he
          localStorage.setItem('expiry', expiry.toString());
          //timer ki line he
          
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid credentials');
        }
      }, err => {
        alert('Login failed');
      });
  }
}
