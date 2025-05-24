import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../../shared/material.module';
import { Title } from '@angular/platform-browser';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, NgIf, NgClass, RouterLink, ReactiveFormsModule, RecuriterLoginSideImageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  imageText = {
    image: "assets/recuriter/authentication/login.png",
    para1: "Raising the talent bars with standards,",
    para2: "will never goes wrong."
  };

  loginForm: any = FormGroup;
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder, private router: Router, private titleService: Title) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]
      ]
    });
  }

  ngOnInit(): void {
    this.setTitle("Job Portal | Recuriter Login");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onFormSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // This triggers error display for untouched fields
      return;
    }

    // Proceed with valid form
    this.router.navigateByUrl('/recuriter/layout')
    console.log("Valid Form", this.loginForm.value);
  }

}
