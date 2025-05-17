import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditEducationComponent } from '../material-dialog/education/add-edit-education/add-edit-education.component';
import { ShowAllEducationComponent } from '../material-dialog/education/show-all-education/show-all-education.component';

@Component({
  selector: 'app-education',
  imports: [MaterialModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  handelAddAction = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddEditEducationComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddEducation.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(ShowAllEducationComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditEducation.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }
}
