import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AuthGuard } from './guards/auth-guard';
import { SignInComponent } from './pages/signin/signin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
