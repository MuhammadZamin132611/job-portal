import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateBasicDetailsComponent } from '../material-dialog/update-basic-details/update-basic-details.component';

@Component({
  selector: 'app-basic-details',
  imports: [MaterialModule],
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.scss'
})
export class BasicDetailsComponent {

  constructor(private dialog: MatDialog,
    private router: Router) { }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Update',
      data: values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(UpdateBasicDetailsComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onUpdateBasicDetails.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }
}
