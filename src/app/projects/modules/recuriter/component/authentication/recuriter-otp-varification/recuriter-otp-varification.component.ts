import { Component, ViewChild } from '@angular/core';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";
import { MaterialModule } from '../../../../../shared/material.module';
import { NgOtpInputComponent } from 'ng-otp-input';

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

  @ViewChild('ngOtpInput') ngOtpInput: any;

  submitOpt() {
    if (this.ngOtpInput.currentVal == null || this.ngOtpInput.currentVal.length !== 6) {
      alert("Otp can not be empty");
      return
    }
    else {
      alert(`Enterd Otp is ${this.ngOtpInput.currentVal}`);
    }
  }
}
