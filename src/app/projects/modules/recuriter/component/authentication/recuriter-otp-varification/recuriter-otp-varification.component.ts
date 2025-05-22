import { Component } from '@angular/core';
import { RecuriterLoginSideImageComponent } from "../../../shared/recuriter-login-side-image/recuriter-login-side-image.component";
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-otp-varification',
  imports: [RecuriterLoginSideImageComponent, MaterialModule],
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
}
