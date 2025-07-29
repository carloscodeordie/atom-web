import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AuthResponse from '../interfaces/AuthResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/signup', {
      email,
      password,
    });
  }

  signin(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/signin', {
      email,
      password,
    });
  }
}
