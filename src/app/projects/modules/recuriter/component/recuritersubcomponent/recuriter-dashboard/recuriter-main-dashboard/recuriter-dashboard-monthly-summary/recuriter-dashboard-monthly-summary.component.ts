import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  colors: string[] | any;
};

@Component({
  selector: 'app-recuriter-dashboard-monthly-summary',
  imports: [MaterialModule, CommonModule, NgApexchartsModule],
  templateUrl: './recuriter-dashboard-monthly-summary.component.html',
  styleUrl: './recuriter-dashboard-monthly-summary.component.scss'
})
export class RecuriterDashboardMonthlySummaryComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.columnChart();
  }

  columnChart() {
    this.chartOptions = {
      series: [{ name: "Applied", data: [76, 85, 101, 98] }, { name: "Offered", data: [44, 55, 57, 56] }],
      legend: { position: 'top', horizontalAlign: 'left' },
      chart: { type: "bar", height: 350 },
      colors: ["#21A14B", "#0175A2"],
      plotOptions: { bar: { horizontal: false, columnWidth: "70%", } },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: { categories: ["1st", "2nd", "3rd", "4th"] },
      yaxis: { title: { show: false, } }, fill: { opacity: 1 }, tooltip: { show: false, }
    };
  }

  selectedPeriod = 'This Month';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }

  selectedRequirement = 'Angular';

  selectRequirement(period: string) {
    this.selectedRequirement = period;
  }

}
