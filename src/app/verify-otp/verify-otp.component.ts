import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent implements OnInit {

  submitted = false;
  verify2fa = false;
  loading = false;
  otpForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.min(6)]]
    })
  }

  get f() {
    return this.otpForm.controls;
  }

  validateOtp() {
    if(this.otpForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.verifyOtp(this.otpForm.value.otp)
        .pipe(first())
        .subscribe({
          next: (res) => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error: any) => {
            if(error.status === 401) {
              console.log(error.error.message)
            }
            this.loading = false;
          }
        })
  }

}
