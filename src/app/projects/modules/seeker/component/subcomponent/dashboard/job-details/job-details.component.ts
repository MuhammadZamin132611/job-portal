import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../../../shared/confirmation/confirmation.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-details',
  imports: [MaterialModule, NgClass],
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


}
