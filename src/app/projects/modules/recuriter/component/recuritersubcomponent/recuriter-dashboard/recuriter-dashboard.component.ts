import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recuriter-dashboard',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './recuriter-dashboard.component.html',
  styleUrl: './recuriter-dashboard.component.scss'
})
export class RecuriterDashboardComponent {

}
