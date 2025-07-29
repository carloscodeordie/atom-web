import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import AuthResponse from '../interfaces/AuthResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  user?: User;
  isLoading: boolean = false;

  signupUser(email: string, password: string): void {
    this.authService
      .signup(email, password)
      .subscribe((response: AuthResponse) => {
        this.cookieService.set('token', response.token);
        this.router.navigate(['tasks']);
      });
  }

  signinUser(email: string, password: string): void {
    this.authService
      .signin(email, password)
      .subscribe((response: AuthResponse) => {
        this.cookieService.set('token', response.token);
        this.router.navigate(['tasks']);
      });
  }

  getUser(): User | null {
    const token = this.cookieService.get('token');
    if (token) {
      this.user = {
        token,
      };
      return this.user;
    }

    return null;
  }

  logoutUser() {
    this.cookieService.delete('token');
    this.router.navigate(['/signin']);
  }
}
