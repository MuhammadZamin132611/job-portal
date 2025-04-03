import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  imports: [MaterialModule, RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

}
