import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShortFilterComponent } from "../../../../shared/short-filter/short-filter.component";
import { JobCardComponent } from "../../../../shared/job-card/job-card.component";

@Component({
  selector: 'app-jobs-for-you',
  imports: [ShortFilterComponent, JobCardComponent],
  templateUrl: './jobs-for-you.component.html',
  styleUrl: './jobs-for-you.component.scss'
})
export class JobsForYouComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Jobs for you");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

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
    }, {
      comanyLogo: 'assets/company_logo/cpmpany_logo2.png',
      jobTitle: 'Mobile Application Developer',
      companyName: 'JCS Technologies',
      location: 'Gurgaon, India',
      initialSalary: '80,000',
      maxSalary: '120,000',
      experience: 'Min 5 years',
      jobType: 'Part Time',
      matches: '85'
    }, {
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
  ];
}
