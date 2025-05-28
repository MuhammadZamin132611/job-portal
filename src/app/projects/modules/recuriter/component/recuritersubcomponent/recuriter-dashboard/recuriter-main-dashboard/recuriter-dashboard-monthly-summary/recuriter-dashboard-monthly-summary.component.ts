import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuriter-dashboard-monthly-summary',
  imports: [MaterialModule, CommonModule],
  templateUrl: './recuriter-dashboard-monthly-summary.component.html',
  styleUrl: './recuriter-dashboard-monthly-summary.component.scss'
})
export class RecuriterDashboardMonthlySummaryComponent {
  selectedPeriod = 'This Month';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }
  
  selectedRequirement = 'Angular';

  selectRequirement(period: string) {
    this.selectedRequirement = period;
  }

}
