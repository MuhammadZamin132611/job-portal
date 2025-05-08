import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-job-card',
  imports: [MaterialModule, NgClass, RouterLink],
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
      matches: '80'
    },
  ];

  constructor(private dialog: MatDialog) { }

  savedJobs() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Saved this Job'
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const response = dialogRef.componentInstance.onEmitStatusChange.subscribe((response: any) => {
      dialogRef.close();
    })
  }
  
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
}
