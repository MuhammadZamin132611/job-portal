import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-applied-jobs',
  imports: [MaterialModule,NgClass],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.scss'
})
export class AppliedJobsComponent {
  @Input() width: string = "w-full";
  @Input() view: string = "grid";
  
  @Input() appliedJobData: JobCardData[] = [
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      initialSalary: '20,000',
      maxSalary: '60,000',
      // experience: 'Min 2 years',
      // jobType: 'Full Time',
      matches: '80',
      status:"Shortlisted",
    },
  ];
}

interface JobCardData {
  comanyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
  initialSalary: string;
  maxSalary: string;
  // experience: string;
  matches: string;
  // jobType: string;
  status:string;
}

