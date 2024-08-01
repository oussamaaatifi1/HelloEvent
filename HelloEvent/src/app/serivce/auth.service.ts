import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../model/environment';
import { RegisterRequest } from '../model/RegisterRequest'; // Adjust path as needed
import { Jwt } from '../model/jwt'; // Adjust path as needed
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiBaseUrl}/api/auth`;
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.loadToken();
  }

  private loadToken(): void {
    const token = localStorage.getItem('accessToken');
    this.tokenSubject.next(token);
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.tokenSubject.value;
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  registerUser(request: RegisterRequest): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/register`, request);
  }

  registerAdmin(request: RegisterRequest): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/register-admin`, request);
  }

  authenticateUser(request: RegisterRequest): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/authenticate`, request);
  }

  authenticateAdmin(request: RegisterRequest): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/authenticate-admin`, request);
  }

  storeToken(token: string): void {
    localStorage.setItem('accessToken', token);
    this.tokenSubject.next(token);
  }

  clearToken(): void {
    localStorage.removeItem('accessToken');
    this.tokenSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }

  logout(): void {
    this.clearToken();
    this.router.navigate(['/login']);
  }
}
