import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowAllExperienceComponent } from '../material-dialog/experience/show-all-experience/show-all-experience.component';
import { AddUpdateExperienceComponent } from '../material-dialog/experience/add-update-experience/add-update-experience.component';

@Component({
  selector: 'app-work-experience',
  imports: [MaterialModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
constructor(private dialog: MatDialog, private router: Router) { }

  handelAddAction = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Add'
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddUpdateExperienceComponent, dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddWorkExperoence.subscribe({
      next:(res:any)=>{
        // this.tableData();
      }
    });
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Update',
      data:values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(ShowAllExperienceComponent, dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditWorkExperoence.subscribe({
      next:(res:any)=>{
        // this.tableData();
      }
    });
  }
}
