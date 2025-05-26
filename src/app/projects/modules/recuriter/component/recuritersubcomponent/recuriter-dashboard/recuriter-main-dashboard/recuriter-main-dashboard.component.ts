import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass } from '@angular/common';
import { RecuriterJobActivityDetailsComponent } from "../recuriter-job-activity-details/recuriter-job-activity-details.component";

@Component({
  selector: 'app-recuriter-main-dashboard',
  imports: [MaterialModule, NgClass, RecuriterJobActivityDetailsComponent],
  templateUrl: './recuriter-main-dashboard.component.html',
  styleUrl: './recuriter-main-dashboard.component.scss'
})
export class RecuriterMainDashboardComponent {
  selectedPeriod = 'Last 30 Days';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }
}
