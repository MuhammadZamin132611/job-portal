import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass } from '@angular/common';
import { RecuriterJobActivityDetailsComponent } from "./recuriter-job-activity-details/recuriter-job-activity-details.component";
import { RecuriterJobActivityChartsComponent } from "./recuriter-job-activity-charts/recuriter-job-activity-charts.component";
import { RecuriterDashboardTeamsComponent } from "./recuriter-dashboard-teams/recuriter-dashboard-teams.component";
import { RecuriterDashboardSubscriptionPlanComponent } from "./recuriter-dashboard-subscription-plan/recuriter-dashboard-subscription-plan.component";
import { RecuriterDashboardMonthlySummaryComponent } from "./recuriter-dashboard-monthly-summary/recuriter-dashboard-monthly-summary.component";

@Component({
  selector: 'app-recuriter-main-dashboard',
  imports: [MaterialModule, NgClass, RecuriterJobActivityDetailsComponent, RecuriterJobActivityChartsComponent, RecuriterDashboardTeamsComponent, RecuriterDashboardSubscriptionPlanComponent, RecuriterDashboardMonthlySummaryComponent],
  templateUrl: './recuriter-main-dashboard.component.html',
  styleUrl: './recuriter-main-dashboard.component.scss'
})
export class RecuriterMainDashboardComponent {
  selectedPeriod = 'Last 30 Days';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }
}
