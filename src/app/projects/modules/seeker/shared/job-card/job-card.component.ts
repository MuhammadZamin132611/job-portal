import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-job-card',
  imports: [MaterialModule, NgClass],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() width: string = "w-full";
  @Input() view: string = "grid";

  @Input() jobCardData: JobCardData[] = [
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      initialSalary: '20,000',
      maxSalary: '60,000',
      experience: 'Min 2 years',
      jobType: 'Full Time',
      matches: '80',
      description: 'We are looking for a Software Engineer to join our team. You will be responsible for developing and maintaining software applications.'

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
  experience: string;
  matches: string;
  jobType: string;
  description: string;
}
