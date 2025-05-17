import { Component, EventEmitter, Inject } from '@angular/core';
import { MaterialModule } from '../../../../../../../../shared/material.module';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EducationComponent } from '../../../education/education.component';
import { AddEditEducationComponent } from '../add-edit-education/add-edit-education.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-show-all-education',
  imports: [MaterialModule, NgIf],
  templateUrl: './show-all-education.component.html',
  styleUrl: './show-all-education.component.scss'
})
export class ShowAllEducationComponent {
  onAddEducation = new EventEmitter();
  onEditEducation = new EventEmitter();
  education: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "Add your new education details."
  maxDate: string;
  minDate: string;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EducationComponent>,
    private router: Router,
    private dialog: MatDialog,
  ) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = maxDate.toISOString().split('T')[0];
    this.minDate = maxDate.toISOString().split('T')[0];
  }


  ngOnInit(): void {
    if (this.dialogData.action === "Edit") {
      this.dialogAction = "Edit";
      this.action = "Save";
      this.text = "Choose below Education details to edit.";
    }
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddEditEducationComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditEducation.subscribe({
      next: (res: any) => {
        // this.tableData();
      }
    });
  }

  allEducation = [
    {
      medium: "Graduation",
      collageName: "Amity University",
      degree: "B. Tech - Computer Science",
      date: "2016 - 2020",
      location: "Noida"
    },
    {
      medium: "12th",
      collageName: "DPSC",
      // degree: "M. Tech - Computer Science",
      date: "2015 - 2016",
      location: "New Delhi"
    },
    {
      medium: "Post Graduation",
      collageName: "Amity University",
      degree: "M. Tech - Computer Science",
      date: "2021 - 2023",
      location: "Noida"
    },
    {
      medium: "10th",
      collageName: "DPSC",
      // degree: "M. Tech - Computer Science",
      date: "2013 - 2014",
      location: "New Delhi"
    },
  ];

}
