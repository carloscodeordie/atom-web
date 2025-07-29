import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  providers: [CookieService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
