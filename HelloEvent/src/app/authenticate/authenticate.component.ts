import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.token) {
          // Navigate to the dashboard or any protected route
          this.router.navigate(['/dashboard']);
        }
      },
      error => {

        console.error('Login failed', error);
      }
    );
  }
}

