import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/serivce/jwt.service';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../serivce/auth.service';
import { Jwt } from '../model/jwt'; // Adjust path as needed
import { RegisterRequest } from '../model/RegisterRequest'; // Adjust path as needed

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { confirmPassword, ...registerData } = this.registerForm.value as RegisterRequest;
      if (registerData.password === confirmPassword) {
        this.authService.registerUser(registerData).subscribe((response: Jwt) => {
          this.authService.storeToken(response.token);
          console.log('User registered successfully:', response);
        }, error => {
          console.error('Error registering user:', error);
        });
      } else {
        console.error('Passwords do not match');
      }
    }
  }
}