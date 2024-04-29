import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { filter } from 'rxjs/operators';

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
export class AppComponent implements OnInit {
  title = 'two factor authentication';
  user? : User | null;
  isLogin? = false;
  currentUrl? = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event:any) => {
        this.currentUrl = event.url;
        this.authService.user.subscribe((u) => {
          this.user = u;
          this.isLogin = u?.id && !this.currentUrl?.includes('/validateOtp') ? true : false;
        });
      });
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
  }

 }
