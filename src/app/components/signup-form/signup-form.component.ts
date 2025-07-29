import { Component } from '@angular/core';
import { UserForm } from '../../interfaces/User';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  constructor(private authFacadeService: AuthFacadeService) {}

  user: UserForm = {
    email: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      this.authFacadeService.signupUser(email, password);
    }
  }
}
