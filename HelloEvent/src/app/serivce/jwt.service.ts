import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwt } from 'src/app/model/jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private BASE_URL = 'http://localhost:8084/api/auth';

  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/register`, signRequest);
  }

  registers(signRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/register-admin`, signRequest);
  }

  login(loginRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/authenticate`, loginRequest);
  }
}
