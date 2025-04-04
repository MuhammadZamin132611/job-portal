import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
