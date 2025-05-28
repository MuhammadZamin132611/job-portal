import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
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
    // this.semiDonut(this.recruiters.chartValue);
    this.recruiters = this.recruiters.map(recruiter => ({
      ...recruiter,
      chartOptions: this.getChartOptions(recruiter.chartValue)
    }));
  }



  activeRequirements: any[] = [];

  ngOnInit(): void {
    const mockData = [
      { title: 'Java Developer', required: 25, offered: 8, open: 7, positionClosed: 56, icon: 'work_outline' },
      { title: 'Angular Developer', required: 18, offered: 5, open: 6, positionClosed: 61, icon: 'code' },
      { title: 'Node.js Developer', required: 20, offered: 10, open: 5, positionClosed: 75, icon: 'terminal' },
      { title: 'UX Designer', required: 10, offered: 6, open: 2, positionClosed: 80, icon: 'brush' },
      { title: 'QA Engineer', required: 12, offered: 4, open: 5, positionClosed: 58, icon: 'bug_report' },
      { title: 'DevOps Engineer', required: 15, offered: 7, open: 3, positionClosed: 70, icon: 'settings' }
    ];

    this.activeRequirements = mockData.map(req => ({
      ...req,
      chartOptions: this.semiDonut(req.positionClosed)
    }));
  }

  semiDonut(value: number): any {
    const total = 100;
    return {
      series: [value, total - value],
      chart: { width: 100, type: 'donut' },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
      colors: [this.getColorByValue(value), '#E0E0E0'],
      fill: { type: 'gradient' },
      legend: { show: false },
      plotOptions: { pie: { startAngle: -90, endAngle: 90, donut: { size: '75%', labels: { show: true, name: { show: false }, value: { show: false }, total: { show: false } } } } },
      responsive: [{ breakpoint: 380, options: { chart: { width: 100 }, legend: { show: false } } }]
    };
  }



  getColorByValue(value: number): string {
    if (value <= 50) return '#FF0000';       // Red
    else if (value <= 75) return '#F79009';  // Amber
    else return '#00C853';                   // Green
  }

  recruiters = [
    {
      name: 'Lana Setiner',
      email: 'lana@gmail.com',
      image: 'assets/profile/profile_image.png',
      chartValue: 44,
      metrics: { requirementsAllocated: 10, jobsPosted: 8, candidatesSourced: 134, positionsClosed: 6 }
    },
    {
      name: 'David King',
      email: 'david@gmail.com',
      image: 'assets/profile/profile_image.png',
      chartValue: 76,
      metrics: { requirementsAllocated: 12, jobsPosted: 9, candidatesSourced: 98, positionsClosed: 7 }
    },
    {
      name: 'Sophia Wells',
      email: 'sophia@gmail.com',
      image: 'assets/profile/profile_image.png',
      chartValue: 63,
      metrics: { requirementsAllocated: 8, jobsPosted: 5, candidatesSourced: 120, positionsClosed: 4 }
    },
    {
      name: 'Michael Smith',
      email: 'michael@gmail.com',
      image: 'assets/profile/profile_image.png',
      chartValue: 89,
      metrics: { requirementsAllocated: 14, jobsPosted: 10, candidatesSourced: 150, positionsClosed: 9 }
    },
    {
      name: 'Emily Turner',
      email: 'emily@gmail.com',
      image: 'assets/profile/profile_image.png',
      chartValue: 51,
      metrics: { requirementsAllocated: 9, jobsPosted: 6, candidatesSourced: 110, positionsClosed: 5 }
    },
    {
      name: 'Jacob Lee',
      email: 'jacob@gmail.com',
      image: 'assets/profile/profile_image.png',
      chartValue: 30,
      metrics: { requirementsAllocated: 7, jobsPosted: 4, candidatesSourced: 85, positionsClosed: 3 }
    }
  ];


  getChartOptions(value: number): any {
    const total = 100;
    return {
      series: [value, total - value],
      chart: { width: 100, type: "donut" },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
      colors: [this.getColorByValue(value), '#E0E0E0'],
      fill: { type: "gradient" },
      legend: { show: false },
      plotOptions: { pie: { startAngle: -90, endAngle: 90, donut: { size: '75%', labels: { show: true, name: { show: false }, value: { show: false }, total: { show: false } } } } },
      responsive: [{ breakpoint: 380, options: { chart: { width: 100 }, legend: { show: false } } }]
    };
  }


  // getActiveRequirement(value: number): any {
  //   const total = 100;
  //   return {
  //     series: [value, total - value],
  //     chart: { width: 100, type: "donut" },
  //     dataLabels: { enabled: false },
  //     tooltip: { enabled: false },
  //     states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
  //     colors: [this.getColorByValue(value), '#E0E0E0'],
  //     fill: { type: "gradient" },
  //     legend: { show: false },
  //     plotOptions: { pie: { startAngle: -90, endAngle: 90, donut: { size: '75%', labels: { show: true, name: { show: false }, value: { show: false }, total: { show: false } } } } },
  //     responsive: [{ breakpoint: 380, options: { chart: { width: 100 }, legend: { show: false } } }]
  //   };
  // }






  selectedPeriod = 'Your Team (10)';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }

  recruiters1: Recruiter[] = [
    {
      image: 'assets/profile/profile_image.png',
      name: 'Rahul Kumar',
      role: 'Recruiter Manger',
      jobPosted: 10,
      open: 2,
      closed: 8,
      candidateSourced: 110,
      candidateOffered: 50,
      children: [
        {
          image: 'assets/profile/profile_image.png',
          name: 'Suman Kumari',
          role: 'Recruiter',
          jobPosted: 2,
          open: '-',
          closed: 2,
          candidateSourced: 40,
          candidateOffered: 30,
        },
        {
          image: 'assets/profile/profile_image.png',
          name: 'Sumit Dugal',
          role: 'Recruiter',
          jobPosted: 2,
          open: 1,
          closed: 2,
          candidateSourced: 60,
          candidateOffered: 20,
        },
      ]
    },
    {
      image: 'assets/profile/profile_image.png',
      name: 'Suman Kumari',
      role: 'Recruiter Manger',
      jobPosted: 3,
      open: 1,
      closed: 2,
      candidateSourced: 30,
      candidateOffered: 10,
      children: [
        {
          image: 'assets/profile/profile_image.png',
          name: 'Zamin',
          role: 'Recruiter',
          jobPosted: 2,
          open: '-',
          closed: 2,
          candidateSourced: 40,
          candidateOffered: 30,
        },
        {
          image: 'assets/profile/profile_image.png',
          name: 'Sumit Dugal',
          role: 'Recruiter',
          jobPosted: 2,
          open: 1,
          closed: 2,
          candidateSourced: 60,
          candidateOffered: 20,
        },
      ]
    }, 
    {
      image: 'assets/profile/profile_image.png',
      name: 'Rahul Kumar',
      role: 'Recruiter Manger',
      jobPosted: 10,
      open: 2,
      closed: 8,
      candidateSourced: 110,
      candidateOffered: 50,
    },
    {
      image: 'assets/profile/profile_image.png',
      name: 'Rahul Kumar',
      role: 'Recruiter Manger',
      jobPosted: 20,
      open: 4,
      closed: 16,
      candidateSourced: 80,
      candidateOffered: 40,
    },
    {
      image: 'assets/profile/profile_image.png',
      name: 'Satish Kumar',
      role: 'Recruiter',
      jobPosted: 10,
      open: 4,
      closed: 6,
      candidateSourced: 30,
      candidateOffered: 20,
    },
    {
      image: 'assets/profile/profile_image.png',
      name: 'Suman Kumari',
      role: 'Recruiter',
      jobPosted: 5,
      open: '-',
      closed: 5,
      candidateSourced: 20,
      candidateOffered: 10,
    },
    {
      image: 'assets/profile/profile_image.png',
      name: 'Satish Kumar',
      role: 'Recruiter',
      jobPosted: 5,
      open: '-',
      closed: 5,
      candidateSourced: 40,
      candidateOffered: 5,
    },
  ];


  recruiterManagers = this.recruiters1.slice(0, 5);

  expandedRowIndex: number | null = null;

  toggleRow(index: number) {
    this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
  }


}

interface Recruiter {
  image: string;
  name: string;
  role: string;
  jobPosted: number;
  open: number | string;
  closed: number | string;
  candidateSourced: number;
  candidateOffered: number;
  children?: Recruiter[]; // Optional nested recruiters
}


