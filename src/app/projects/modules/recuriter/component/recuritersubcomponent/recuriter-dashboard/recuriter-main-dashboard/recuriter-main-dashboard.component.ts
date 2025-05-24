import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-main-dashboard',
  imports: [MaterialModule],
  templateUrl: './recuriter-main-dashboard.component.html',
  styleUrl: './recuriter-main-dashboard.component.scss'
})
export class RecuriterMainDashboardComponent {
  selectedPeriod = 'Last 30 Days';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }
}
