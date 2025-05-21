import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PrimarySkillsComponent } from '../../../primary-skills/primary-skills.component';
import { AddEditPrimarySkillComponent } from '../add-edit-primary-skill/add-edit-primary-skill.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';

@Component({
  selector: 'app-show-all-primary-skill',
  imports: [MaterialModule],
  templateUrl: './show-all-primary-skill.component.html',
  styleUrl: './show-all-primary-skill.component.scss'
})
export class ShowAllPrimarySkillComponent implements OnInit {
  onAddPrimarySkill = new EventEmitter();
  onEditPrimarySkill = new EventEmitter();
  primarySjill: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "Add your new education details."

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PrimarySkillsComponent>,
    private router: Router,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    if (this.dialogData.action === "Edit") {
      this.dialogAction = "Edit";
      this.action = "Save";
      this.text = "Edit primary skills to your profile.";
    }
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddEditPrimarySkillComponent, dialogConfig);
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
