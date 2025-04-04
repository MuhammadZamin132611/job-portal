import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../../../shared/material.module';
import { Title } from '@angular/platform-browser';
import { JobCardComponent } from '../../../../shared/job-card/job-card.component';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, RouterLink, JobCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Dashboard");
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
      matches: '80',
      description: 'We are looking for a Software Engineer to join our team. You will be responsible for developing and maintaining software applications.'

    },{
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
