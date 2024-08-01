import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../model/environment';
import { RegisterRequest } from '../model/RegisterRequest'; // Adjust path as needed
import { Jwt } from '../model/jwt'; // Adjust path as needed
import { Router } from '@angular/router';

const BASE_URL = "http://localhost:8084/api/auth/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  
    register(singRequest:any): Observable<Jwt>{
      return this.http.post<Jwt>(BASE_URL+'register', singRequest)
    }
    login(loginRequest:any): Observable<Jwt>{
      return this.http.post<Jwt>(BASE_URL+'authenticate', loginRequest)
    }
    hello(): Observable<any> {
      const headers = this.createAuthorizationHeader();
      return this.http.get(BASE_URL + 'hello', { headers });
    }
    
    private createAuthorizationHeader(): HttpHeaders | undefined {
      const jwtToken = localStorage.getItem('jwt');
      if (jwtToken) {
        console.log("JWT token found in local storage", jwtToken);
        return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
      } else {
        console.log("JWT token not found in local storage");
        return undefined;
      }
    }
  // private apiUrl = `${environment.apiBaseUrl}/api/auth`;
  // private tokenSubject = new BehaviorSubject<string | null>(null);
  // public token$: Observable<string | null> = this.tokenSubject.asObservable();

  // constructor(private http: HttpClient, private router: Router) {
  //   this.loadToken();
  // }

  // private loadToken(): void {
  //   const token = localStorage.getItem('accessToken');
  //   this.tokenSubject.next(token);
  // }

  // private getAuthHeaders(): HttpHeaders {
  //   const token = this.tokenSubject.value;
  //   return new HttpHeaders({
  //     'Authorization': token ? `Bearer ${token}` : '',
  //     'Content-Type': 'application/json'
  //   });
  // }

  // registerUser(request: RegisterRequest): Observable<Jwt> {
  //   return this.http.post<Jwt>(`${this.apiUrl}/register`, request);
  // }

  // registerAdmin(request: RegisterRequest): Observable<Jwt> {
  //   return this.http.post<Jwt>(`${this.apiUrl}/register-admin`, request);
  // }

  // authenticateUser(request: RegisterRequest): Observable<Jwt> {
  //   return this.http.post<Jwt>(`${this.apiUrl}/authenticate`, request);
  // }

  // authenticateAdmin(request: RegisterRequest): Observable<Jwt> {
  //   return this.http.post<Jwt>(`${this.apiUrl}/authenticate-admin`, request);
  // }

  // storeToken(token: string): void {
  //   localStorage.setItem('accessToken', token);
  //   this.tokenSubject.next(token);
  // }

  // clearToken(): void {
  //   localStorage.removeItem('accessToken');
  //   this.tokenSubject.next(null);
  // }

  // isAuthenticated(): boolean {
  //   return !!this.tokenSubject.value;
  // }

  // logout(): void {
  //   this.clearToken();
  //   this.router.navigate(['/login']);
  // }
}
