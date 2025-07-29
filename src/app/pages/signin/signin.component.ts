import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SigninFormComponent } from '../../components/signin-form/signin-form.component';

@Component({
  selector: 'app-signin',
  imports: [HeaderComponent, SigninFormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SignInComponent {}
