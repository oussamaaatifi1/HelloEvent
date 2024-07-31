import {HttpClient, HttpHeaders} from "@angular/common/http";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import { Jwt } from "src/app/model/jwt";


@Injectable({
  providedIn: 'root'
})
export class ServiceEventsService {

  private BASE_URL = "http://localhost:8082/api/auth/"; // Use a string for BASE_URL


  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/register`, signRequest);
  }

  login(loginRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/authenticate`, loginRequest);
  }

  registerAdmin(signRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/register-admin`, signRequest);
  }

  authenticateAdmin(loginRequest: any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/authenticate-admin`, loginRequest);
  }

}
