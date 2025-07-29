import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  imports: [HeaderComponent, SignupFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
