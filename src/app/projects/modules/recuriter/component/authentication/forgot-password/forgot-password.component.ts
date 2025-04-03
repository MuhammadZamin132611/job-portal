import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder, private router: Router, private titleService: Title) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
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
    if (this.loginForm.valid) {
      this.router.navigateByUrl('/layout/dashboard')
      console.log("valid", this.loginForm.value);
    } else {
      console.log("not valid", this.loginForm.value)
    }
  }
}
