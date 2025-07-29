import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthFacadeService } from '../services/auth-facade.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authFacadeService: AuthFacadeService
  ) {}

  canActivate(): boolean {
    if (this.authFacadeService.getUser()) {
      return true;
    }

    this.router.navigate(['/signup']);
    return false;
  }
}
