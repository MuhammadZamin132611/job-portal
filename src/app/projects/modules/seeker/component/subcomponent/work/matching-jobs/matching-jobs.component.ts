import { Component } from '@angular/core';
import { JobCardComponent } from "../../../../shared/job-card/job-card.component";

@Component({
  selector: 'app-matching-jobs',
  imports: [JobCardComponent],
  templateUrl: './matching-jobs.component.html',
  styleUrl: './matching-jobs.component.scss'
})
export class MatchingJobsComponent {


  jobCardData = [
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      initialSalary: '20,000',
      maxSalary: '60,000',
      experience: 'Min 2 years',
      jobType: 'Full Time',
      matches: '80'
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo2.png',
      jobTitle: 'Mobile Application Developer',
      companyName: 'JCS Technologies',
      location: 'Gurgaon, India',
      initialSalary: '80,000',
      maxSalary: '120,000',
      experience: 'Min 5 years',
      jobType: 'Part Time',
      matches: '85'
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      initialSalary: '20,000',
      maxSalary: '60,000',
      experience: 'Min 2 years',
      jobType: 'Full Time',
      matches: '80'
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo2.png',
      jobTitle: 'Mobile Application Developer',
      companyName: 'JCS Technologies',
      location: 'Gurgaon, India',
      initialSalary: '80,000',
      maxSalary: '120,000',
      experience: 'Min 5 years',
      jobType: 'Part Time',
      matches: '85'
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      initialSalary: '20,000',
      maxSalary: '60,000',
      experience: 'Min 2 years',
      jobType: 'Full Time',
      matches: '80'
    },
  ];
}
