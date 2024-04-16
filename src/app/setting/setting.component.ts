import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  is2FAEnabled = false;

  enable2FA() {
    this.is2FAEnabled = !this.is2FAEnabled
    alert("Enabled 2FA")
  }
  disable2FA() {
    this.is2FAEnabled = !this.is2FAEnabled
    alert("Disabled 2FA")
  }
}
