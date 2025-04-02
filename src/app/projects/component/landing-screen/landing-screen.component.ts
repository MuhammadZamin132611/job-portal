import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  imports: [MaterialModule, RouterLink],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss'
})
export class LandingScreenComponent {

}
