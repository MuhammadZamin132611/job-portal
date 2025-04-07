import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { JobCardComponent } from '../../../../shared/job-card/job-card.component';
import { ShortFilterComponent } from "../../../../shared/short-filter/short-filter.component";

@Component({
  selector: 'app-promoted-jobs',
  imports: [JobCardComponent, ShortFilterComponent],
  templateUrl: './promoted-jobs.component.html',
  styleUrl: './promoted-jobs.component.scss'
})
export class PromotedJobsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Promoted Jobs");
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
