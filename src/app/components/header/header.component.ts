import { Component, Input } from '@angular/core';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() isActionsDisplayed: boolean = false;

  constructor(private authFacadeService: AuthFacadeService) {}

  logout() {
    this.authFacadeService.logoutUser();
  }
}
