import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MaterialModule } from '../../../../../../shared/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applied-jobs',
  imports: [MaterialModule, RouterLink],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.scss'
})
export class AppliedJobsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Applied Jobs");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  jobCardData: JobCardData[] = [
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      appliedData: "Application sent 1 week ago"
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo2.png',
      jobTitle: 'Web Developer Engineer',
      companyName: 'Innova Company',
      location: 'Noida, India',
      appliedData: "Application sent 2 week ago"
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo3.png',
      jobTitle: 'Application Developer',
      companyName: 'IT Company',
      location: 'Gurgaon, India',
      appliedData: "Application sent 3 week ago"
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo4.png',
      jobTitle: 'Mobile Engineer',
      companyName: 'JCS Company',
      location: 'New Delhi, India',
      appliedData: "Application sent 4 week ago"
    },
  ];
}

interface JobCardData {
  comanyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
  appliedData: string
}

