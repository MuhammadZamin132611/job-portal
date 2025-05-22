import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-login-side-image',
  imports: [MaterialModule],
  templateUrl: './recuriter-login-side-image.component.html',
  styleUrl: './recuriter-login-side-image.component.scss'
})
export class RecuriterLoginSideImageComponent {

  @Input() imageText: LoginImage = {
    image: "",
    para1: "",
    para2: ""
  };

}

interface LoginImage {
  image: string,
  para1: string,
  para2: string
}
