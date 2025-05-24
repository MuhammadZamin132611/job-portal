import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [MaterialModule, ReactiveFormsModule,NgIf,NgClass, RecuriterLoginSideImageComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgetPassword: FormGroup;
  showPassword: boolean = false;

  imageText = {
    image: "assets/recuriter/authentication/login.png",
    para1: "Raising the talent bars with standards,",
    para2: "will never goes wrong."
  };

  constructor(private _fb: FormBuilder, private router: Router, private titleService: Title) {
    this.forgetPassword = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.setTitle("Job Portal | Recuriter Forgot-Password");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onFormSubmit() {
    if (this.forgetPassword.valid) {
      this.router.navigateByUrl('/recuriter/auth/otp-varification')
      console.log("valid", this.forgetPassword.value);
    } else {
      this.forgetPassword.markAllAsTouched();
      console.log("not valid", this.forgetPassword.value)
    }
  }
}
