import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-work',
  imports: [RouterLink, MaterialModule, RouterOutlet],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
