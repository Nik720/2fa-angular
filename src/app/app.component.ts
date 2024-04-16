import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    LoginComponent,
    AlertsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'two factor authentication';
  user? : User | null;
  isLogin? = false;

  constructor(
    private authService: AuthenticationService
  ) {
    this.authService.user.subscribe((u) => {
      this.user = u;
      this.isLogin = u?.id ? !this.isLogin : false;
    });
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
  }

 }
