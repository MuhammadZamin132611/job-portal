import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../shared/material.module';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, MaterialModule, NgIf, NgClass, RouterLink, RecuriterLoginSideImageComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  imageText = {
    image: "assets/recuriter/authentication/login.png",
    para1: "Raising the talent bars with standards,",
    para2: "will never goes wrong."
  };

  signUpForm: FormGroup;
  maxDate: string;

  constructor(private _fb: FormBuilder, private router: Router, private titleService: Title) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = maxDate.toISOString().split('T')[0];

    this.signUpForm = this._fb.group({
      // email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
      pan: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.setTitle("Job Portal | Recuriter Sign-up");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  onFormSubmit() {
    if (this.signUpForm.valid) {
      this.router.navigateByUrl('/recuriter/login');
      console.log("valid", this.signUpForm.value);
    } else {
      this.signUpForm.markAllAsTouched();
      console.log("In valid", this.signUpForm.value);
    }
  }

}
