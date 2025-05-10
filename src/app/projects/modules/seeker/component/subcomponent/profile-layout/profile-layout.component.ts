import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-layout',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.scss'
})
export class ProfileLayoutComponent {

}
