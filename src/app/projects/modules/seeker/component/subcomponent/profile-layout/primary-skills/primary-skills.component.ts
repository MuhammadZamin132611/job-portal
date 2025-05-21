import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditPrimarySkillComponent } from '../material-dialog/primary-skills/add-edit-primary-skill/add-edit-primary-skill.component';
import { ShowAllPrimarySkillComponent } from '../material-dialog/primary-skills/show-all-primary-skill/show-all-primary-skill.component';

@Component({
  selector: 'app-primary-skills',
  imports: [MaterialModule, NgFor, NgClass, NgStyle],
  templateUrl: './primary-skills.component.html',
  styleUrl: './primary-skills.component.scss'
})
export class PrimarySkillsComponent {
  constructor(private dialog: MatDialog, private router: Router) { }


  handelAddAction = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddEditPrimarySkillComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddPrimarySkill.subscribe({
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
    const dialogRef = this.dialog.open(ShowAllPrimarySkillComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditPrimarySkill.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }
   
  skills = [
    { name: "JavaScript", percentage: 9 },
    { name: "Angular", percentage: 7 },
    { name: "TypeScript", percentage: 4 },
    { name: "HTML", percentage: 8 },
    { name: "CSS", percentage: 6 },
    { name: "Node.js", percentage: 3 }
  ]


 



}
