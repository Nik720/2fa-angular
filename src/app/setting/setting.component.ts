import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  is2FAEnabled = false;
  user: User | null | undefined

  constructor(private authService: AuthenticationService) {
    this.authService.user.subscribe(u => this.user = u);
    this.is2FAEnabled = this.user?.enabled2fa || false;
  }

  enable2FA() {
    this.is2FAEnabled = !this.is2FAEnabled
    alert("Enabled 2FA")
  }
  disable2FA() {
    this.is2FAEnabled = !this.is2FAEnabled
    alert("Disabled 2FA")
  }
}
