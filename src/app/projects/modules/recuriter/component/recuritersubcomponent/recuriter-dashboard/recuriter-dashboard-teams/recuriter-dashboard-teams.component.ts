import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ChartComponent,
  ApexPlotOptions,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels?: string[] | any;
  tooltip: boolean | any;
  colors: string[] | any;
  states: string[] | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  plotOptions: ApexPlotOptions | any;
  dataLabels: ApexDataLabels | any;
};
@Component({
  selector: 'app-recuriter-dashboard-teams',
  imports: [MaterialModule, CommonModule, NgApexchartsModule],
  templateUrl: './recuriter-dashboard-teams.component.html',
  styleUrl: './recuriter-dashboard-teams.component.scss'
})
export class RecuriterDashboardTeamsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public semiCircalOptions!: Partial<ChartOptions>;

  constructor() {
    this.semiDonut();
  }

  getColorByValue(value: number): string {
    if (value <= 50) return '#FF0000';       // Red
    else if (value <= 75) return '#FFA500';  // Amber
    else return '#00C853';                   // Green
  }


  semiDonut(): void {
    const value = 78;
    const total = 100;
    const color = this.getColorByValue(value);
    this.semiCircalOptions = {
      series: [value, total - value],
      chart: { width: 100, type: "donut" },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
      colors: [color, '#E0E0E0'],
      fill: { type: "gradient" },
      legend: { show: false },
      plotOptions: {
        pie: {
          startAngle: -90, endAngle: 90, donut: {
            size: '75%', labels: {
              show: true, name: { show: false },
              value: { show: false, fontSize: '14px', color: '#000', formatter: () => `${value}%` },
              total: { show: false }
            }
          }
        }
      },
      responsive: [{ breakpoint: 380, options: { chart: { width: 100 }, legend: { show: false } } }]
    };
  }





  selectedPeriod = 'Your Team (10)';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }


}
