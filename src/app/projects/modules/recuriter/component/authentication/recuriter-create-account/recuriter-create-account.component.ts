import { Component, OnInit } from '@angular/core';
import { RecuriterSignupImagesComponent } from "../../../shared/recuriter-signup-images/recuriter-signup-images.component";
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-create-account',
  imports: [RecuriterSignupImagesComponent,MaterialModule, ReactiveFormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './recuriter-create-account.component.html',
  styleUrl: './recuriter-create-account.component.scss'
})
export class RecuriterCreateAccountComponent implements OnInit {
  createAccount: any = FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private titleService: Title,) { }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.createAccount = this.fb.group({
      yourName: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, { validators: this.passwordsMatchValidator() });
    this.setTitle("Job Portal | Recuriter Create Account");
  }

  passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        return { passwordsMismatch: true };
      }
      return null;
    };
  }

  password: boolean = false;
  confirmsPassword: boolean = false;

  togglenewPasswordVisibility() {
    this.password = !this.password;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmsPassword = !this.confirmsPassword;
  }

  onFormSubmit() {
    if (this.createAccount.valid) {
      this.router.navigateByUrl('/recuriter/otp-varification');
      console.log("valid", this.createAccount.value);
    } else {
      this.createAccount.markAllAsTouched();
      console.log("In valid", this.createAccount.value);
    }
  }

  onlyMobileNumberKey(event: Event): boolean {
    const e = event as KeyboardEvent;
    const charCode = e.which ? e.which : e.keyCode;

    // Allow only digits (0–9)
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
      return false;
    }
    return true;
  }

}
