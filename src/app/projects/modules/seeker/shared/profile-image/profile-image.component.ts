import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  imports: [NgClass],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent {
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";

}
