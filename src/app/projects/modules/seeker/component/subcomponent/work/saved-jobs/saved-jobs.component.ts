import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-saved-jobs',
  imports: [MaterialModule, NgClass],
  templateUrl: './saved-jobs.component.html',
  styleUrl: './saved-jobs.component.scss'
})
export class SavedJobsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Saved Jobs");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  @Input() width: string = "w-full";
  @Input() view: string = "grid";

  @Input() appliedJobData: JobCardData[] = [
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo1.png',
      jobTitle: 'Software Engineer',
      companyName: 'JCS Company',
      location: 'New Delhi, India',
      initialSalary: '20,000',
      maxSalary: '60,000',
      matches: '85',
      saved:"Saved 1 week ago"
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo2.png',
      jobTitle: 'Mobile Engineer',
      companyName: 'Tech Company',
      location: 'New Delhi, India',
      initialSalary: '40,000',
      maxSalary: '80,000',
      matches: '90',
      saved:"Saved 2 week ago"
    },
    {
      comanyLogo: 'assets/company_logo/cpmpany_logo3.png',
      jobTitle: 'Testing Engineer',
      companyName: 'Nova Company',
      location: 'New Delhi, India',
      initialSalary: '80,000',
      maxSalary: '1,20,000',
      matches: '95',
      saved:"Saved 3 week ago"
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
  matches: string;
  saved:string
}
