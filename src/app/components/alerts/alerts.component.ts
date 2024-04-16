import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(
    private router: Router, 
    private alertService: AlertService
  ) {}

  removeAlert(alert: Alert) {}

  cssClass(alert: Alert) {}

}
