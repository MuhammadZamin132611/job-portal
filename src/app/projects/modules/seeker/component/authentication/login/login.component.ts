import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder, private router: Router) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]
      ]
    });
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
