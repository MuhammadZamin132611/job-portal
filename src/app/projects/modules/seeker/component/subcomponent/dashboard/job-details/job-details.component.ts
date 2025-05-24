import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../../../../../shared/confirmation/confirmation.component';
import { Title } from '@angular/platform-browser';
import { JobCardComponent } from "../../../../shared/job-card/job-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-details',
  imports: [MaterialModule, NgClass, JobCardComponent, RouterLink],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  constructor(private titleService: Title, private dialog: MatDialog) { }

  activeSection: string = 'details';

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  applyJobs() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Apply Job'
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const response = dialogRef.componentInstance.onEmitStatusChange.subscribe((response: any) => {
      dialogRef.close();
    })
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
