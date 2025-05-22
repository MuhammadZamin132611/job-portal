import { Component, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OtherSkillsComponent } from '../../../other-skills/other-skills.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditOtherSkillsComponent } from '../add-edit-other-skills/add-edit-other-skills.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';

@Component({
  selector: 'app-show-all-other-skills',
  imports: [MaterialModule],
  templateUrl: './show-all-other-skills.component.html',
  styleUrl: './show-all-other-skills.component.scss'
})
export class ShowAllOtherSkillsComponent {
  onAddOtherSkill = new EventEmitter();
  onEditOtherSkill = new EventEmitter();
  primarySjill: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "Add other skills to your profile."

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OtherSkillsComponent>,
    private router: Router,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    if (this.dialogData.action === "Edit") {
      this.dialogAction = "Edit";
      this.action = "Save";
      this.text = "Edit other skills to your profile.";
    }
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
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

  skills = [
    { name: "JavaScript", percentage: 9 },
    { name: "Angular", percentage: 7 },
    { name: "TypeScript", percentage: 4 },
    { name: "HTML", percentage: 8 },
    { name: "CSS", percentage: 6 },
    { name: "Node.js", percentage: 3 }
  ]
}
