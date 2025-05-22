import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgFor } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditOtherSkillsComponent } from '../material-dialog/other-skills/add-edit-other-skills/add-edit-other-skills.component';
import { ShowAllOtherSkillsComponent } from '../material-dialog/other-skills/show-all-other-skills/show-all-other-skills.component';

@Component({
  selector: 'app-other-skills',
  imports: [MaterialModule, NgFor],
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.scss'
})
export class OtherSkillsComponent {
  skills = [
    { name: "JavaScript", percentage: 9 },
    { name: "Angular", percentage: 7 },
    { name: "TypeScript", percentage: 4 },
    { name: "HTML", percentage: 8 },
    { name: "CSS", percentage: 6 },
    { name: "Node.js", percentage: 3 }
  ]

  constructor(private dialog: MatDialog, private router: Router) { }


  handelAddAction = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddEditOtherSkillsComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddOtherSkill.subscribe({
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
    const dialogRef = this.dialog.open(ShowAllOtherSkillsComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditOtherSkill.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }
}
