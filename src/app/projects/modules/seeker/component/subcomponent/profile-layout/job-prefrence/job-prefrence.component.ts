import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgFor } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUpdateJobPreferencesComponent } from '../material-dialog/add-update-job-preferences/add-update-job-preferences.component';

@Component({
  selector: 'app-job-prefrence',
  imports: [MaterialModule, NgFor],
  templateUrl: './job-prefrence.component.html',
  styleUrl: './job-prefrence.component.scss'
})
export class JobPrefrenceComponent {
  cities = ['New Delhi', 'Pune', 'Bangalore', "UP"];
  interestArea = ['Java Developer', 'Web Developer', 'Androide Development'];


  constructor(private dialog: MatDialog, private router: Router) { }

  handelAddAction = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddUpdateJobPreferencesComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddJobPreference.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Update',
      data: values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddUpdateJobPreferencesComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditJobPreference.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }
}
