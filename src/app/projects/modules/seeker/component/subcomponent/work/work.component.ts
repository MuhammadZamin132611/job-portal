import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-work',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
