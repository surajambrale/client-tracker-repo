import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = { email: this.email, password: this.password };
    this.http.post('https://client-tracker-repo.onrender.com/admin/login', body).subscribe(
      (res: any) => {
        if (res.success) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid login');
        }
      },
      err => alert('Login error')
    );
  }
}
