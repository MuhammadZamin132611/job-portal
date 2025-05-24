import { Component, ViewChild } from '@angular/core';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";
import { MaterialModule } from '../../../../../shared/material.module';
import { NgOtpInputComponent } from 'ng-otp-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuriter-otp-varification',
  imports: [RecuriterLoginSideImageComponent, MaterialModule, NgOtpInputComponent],
  templateUrl: './recuriter-otp-varification.component.html',
  styleUrl: './recuriter-otp-varification.component.scss'
})
export class RecuriterOtpVarificationComponent {
  imageText = {
    image: "assets/recuriter/authentication/login.png",
    para1: "Raising the talent bars with standards,",
    para2: "will never goes wrong."
  };

  email: string = "example@gmail.com";

  otpConfig = {
    length: 6,
    allowNumbersOnly: true,
    inputClass: 'w-12 h-12 text-center text-lg font-semibold border-2 border-gray-200 rounded mx-2 focus:outline-none focus:ring-2 focus:ring-green-600'
  };
  @ViewChild('ngOtpInput') ngOtpInput: any;

  constructor(private router: Router) {}

  submitOpt() {
    if (this.ngOtpInput.currentVal == null || this.ngOtpInput.currentVal.length !== 6) {
      console.error("Otp can not be empty");
      return
    }
    else {
      this.router.navigateByUrl('/recuriter/auth/reset-password')
      console.log(`Enterd Otp is ${this.ngOtpInput.currentVal}`);
    }
  }
}
