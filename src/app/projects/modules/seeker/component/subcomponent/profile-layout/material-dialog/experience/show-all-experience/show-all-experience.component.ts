import { Component, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { WorkExperienceComponent } from '../../../work-experience/work-experience.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';
import { Router } from '@angular/router';
import { AddUpdateExperienceComponent } from '../add-update-experience/add-update-experience.component';

@Component({
  selector: 'app-show-all-experience',
  imports: [MaterialModule],
  templateUrl: './show-all-experience.component.html',
  styleUrl: './show-all-experience.component.scss'
})
export class ShowAllExperienceComponent {
  onAddWorkExperoence = new EventEmitter();
  onEditWorkExperoence = new EventEmitter();
  aboutMeForm: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<WorkExperienceComponent>,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // this.aboutMeForm = this.fb.group({
    //   description: [null, [Validators.required]]
    // });
    if (this.dialogData.action === "Update") {
      this.dialogAction = "Update";
      this.action = "Update";
      // this.aboutMeForm.patchValue(this.dialogData.data);
    }
  }

  handelSubmit = () => {
    if (this.dialogAction === "Update") {
      this.edit();
    }
    else {
      this.add();
    }
  }
  add = () => {
    var formData = this.aboutMeForm.value;
    var data = {
      description: formData.name,
    }
    this.dialogRef.close();
    this.onAddWorkExperoence.emit();
  }

  edit = () => {
    var formData = this.aboutMeForm.value;
    var data = {
      id: this.dialogData.data.id,
      description: formData.name,
    }
    this.dialogRef.close();
    this.onEditWorkExperoence.emit();
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Update',
      data: values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddUpdateExperienceComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditWorkExperoence.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }

  workExperience = [
    {
      role:"Androide Developer",
      companyName:"Fourbrick Technologies",
      industryType:"IT & Consultancy",
      startDate:"Oct 2020",
      endDate:"Apr 2022"
    },
    {
      role:"Web Developer",
      companyName:"FM",
      industryType:"IT Service",
      startDate:"Apr 2022",
      endDate:"Present"
    },
  ]
}
