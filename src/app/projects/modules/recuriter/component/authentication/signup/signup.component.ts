import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../shared/material.module';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, MaterialModule, NgIf, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm: FormGroup;
  showPassword: boolean = false;
  maxDate: Date;

  constructor(private _fb: FormBuilder, private router: Router, private titleService:Title) {
    const today = new Date();
    this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    this.signUpForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      dob: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.setTitle("Job Portal | Recuriter Sign-up");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onFormSubmit() {
    if (this.signUpForm.valid) {
      this.router.navigateByUrl('/login');
      console.log("valid", this.signUpForm.value);
    } else {
      console.log("In valid", this.signUpForm.value);
    }
  }

  validateNumber(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Block non-numeric input
    }
  }
}
