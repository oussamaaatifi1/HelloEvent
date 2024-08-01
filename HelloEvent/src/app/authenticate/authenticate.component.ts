import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Jwt } from '../model/jwt'; 
import { JwtService } from '../serivce/jwt.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  loginForm!: FormGroup;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (response: Jwt) => {
        console.log('API Response:', response); // Log the response
        const jwToken = response.access_token; // Correctly access the token
        if (jwToken) {
          localStorage.setItem('jwt', jwToken);
          this.router.navigateByUrl("/user/dashboard");
        } else {
          console.error('JWT token is undefined');
        }
      },
      error => {
        console.error('Error during login:', error); // Log any errors
      }
    );
  }
}
