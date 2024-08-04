import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'git-hub-repositories-search';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.authService.login('eilon', 'somePassword').subscribe(
      () => {
        console.log('Login successful');
      },
      () => {
        console.error('Login failed');
      }
    );
  }

  logout() {
    this.authService.logout();
    console.log('Logged out');
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
