import { Component } from '@angular/core';
import { UserForm } from '../../interfaces/User';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-signin-form',
  imports: [FormsModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss',
})
export class SigninFormComponent {
  constructor(private authFacadeService: AuthFacadeService) {}

  user: UserForm = {
    email: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      this.authFacadeService.signinUser(email, password);
    }
  }
}
