import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TOTP, User } from '../models/user';
import { first } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  is2FAEnabled = false;
  user: User | null | undefined
  totpDetail: TOTP | undefined;
  processing = false;
  authCode = "";

  constructor(private authService: AuthenticationService) {
    this.authService.user.subscribe(u => this.user = u);
    this.is2FAEnabled = this.user?.enabled2fa || false;
  }

  enable2FA() {
    this.authService.enable2fa()
      .pipe(first())
      .subscribe({
        next: (res:any) => {
          this.totpDetail = res.data;
          this.processing = true;
        },
        error: (err) => {
            console.log(err);
        }
      })
  }

  verifyOtp() {
    if(this.authCode.length !== 6) {
      return 
    }

    this.authService.verifyOtp(this.authCode)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.authService.logout()
        },
        error: (err: any) => {
          console.log(err);
          this.processing = false;
        }
      })
  }

  disable2FA() {
    this.is2FAEnabled = !this.is2FAEnabled
    alert("Disabled 2FA")
  }
}
