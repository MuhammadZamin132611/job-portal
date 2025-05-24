import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-reset-password-recuriter',
  imports: [MaterialModule, RecuriterLoginSideImageComponent, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './reset-password-recuriter.component.html',
  styleUrl: './reset-password-recuriter.component.scss'
})
export class ResetPasswordRecuriterComponent implements OnInit {
  imageText = {
    image: "assets/recuriter/authentication/login.png",
    para1: "Raising the talent bars with standards,",
    para2: "will never goes wrong."
  };
  resetPassword: any = FormGroup;
  newPassword: boolean = false;
  confirmsPassword: boolean = false;

  constructor(private fb: FormBuilder, private titleService: Title, private router: Router,) { }

  ngOnInit(): void {
    this.resetPassword = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.passwordsMatchValidator() });
    this.setTitle("Job Portal | Recuriter Reset Password");
  }

  passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = control.get('newPassword')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      if (newPassword !== confirmPassword) {
        return { passwordsMismatch: true };
      }
      return null;
    };
  }

  onFormSubmit() {
    if (this.resetPassword.invalid) {
      this.resetPassword.markAllAsTouched(); // This triggers error display for untouched fields
      return;
    }
    else {
      // Proceed with valid form
      // this.router.navigateByUrl('/recuriter/auth/forgot-password')
      console.log("Valid Form", this.resetPassword.value);
    }
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  togglenewPasswordVisibility() {
    this.newPassword = !this.newPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmsPassword = !this.confirmsPassword;
  }

}
