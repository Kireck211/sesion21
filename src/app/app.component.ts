import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe({
      next: (bool => this.isLoggedIn = bool)
    });
  }

  logout() {
    this.authService.logout();
  }
}
