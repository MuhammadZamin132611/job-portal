import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ChartComponent,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  colors: string[] | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  plotOptions: ApexPlotOptions | any;
  dataLabels: ApexDataLabels | any;
};

@Component({
  selector: 'app-recuriter-job-activity-charts',
  imports: [MaterialModule, CommonModule, NgApexchartsModule],
  templateUrl: './recuriter-job-activity-charts.component.html',
  styleUrl: './recuriter-job-activity-charts.component.scss'
})
export class RecuriterJobActivityChartsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public semiCircalOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 41, 25],
      chart: {
        width: 200,
        type: "donut"
      },
      labels: ['Appllied', 'Sourced', 'Shortlisted', 'Offered'],
      colors: ['#EAAA08', '#F04438', '#5D6B98', '#3CCB7F'],
      dataLabels: {
        enabled: true
      },
      // fill: {
      //   type: "gradient"
      // },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          // startAngle: -90,
          // endAngle: 90,
          donut: {
            size: '45%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: () => {
                  return this.chartOptions.series.reduce((a: number, b: number) => a + b, 0).toString();
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }
      ]
    };
  }


  metrics = [
    { label: 'Today', values: [15, 10, 5, 5, 5] },
    { label: 'Last 7 Days', values: [50, 40, 30, 30, 10] },
    { label: 'Last 30 Days', values: [450, 350, 330, 300, 50] },
  ];

  headers = [
    { label: 'Applied', color: '#0066FF' },
    { label: 'Sourced', color: '#F4B740' },
    { label: 'Shortlist', color: '#3E4BD1' },
    { label: 'Offered', color: '#12B76A' },
    { label: 'Rejected', color: '#F04438' },
  ];
}
