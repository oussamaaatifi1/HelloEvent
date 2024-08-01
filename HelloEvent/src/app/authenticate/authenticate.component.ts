import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../serivce/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  loginForm!: FormGroup;
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  submitForm(): void {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (response : Jwt) => {
            const jwToken = response.token;
            localStorage.setItem('jwt', jwToken);
           this.router.navigateByUrl("/dashboard")
        }
    )
  }
}
