import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recuriter-profile-image',
  imports: [NgClass],
  templateUrl: './recuriter-profile-image.component.html',
  styleUrl: './recuriter-profile-image.component.scss'
})
export class RecuriterProfileImageComponent {
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";
}
