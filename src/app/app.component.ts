import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { CommonModule } from '@angular/common';

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
  user? = "";
  isLogin? = false;

  constructor(private router: Router) {}

  logout() {
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

 }
