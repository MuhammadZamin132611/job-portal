import { Component, EventEmitter, Inject } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JobPrefrenceComponent } from '../../job-prefrence/job-prefrence.component';

@Component({
  selector: 'app-add-update-job-preferences',
  imports: [MaterialModule, NgFor, NgIf],
  templateUrl: './add-update-job-preferences.component.html',
  styleUrl: './add-update-job-preferences.component.scss'
})
export class AddUpdateJobPreferencesComponent {
  roles = ['Graphic designe', "Java Developer", 'Product Designer', 'Team Leader',];
  interestArea = ['Java Developer', 'Web Developer', 'Androide Development'];
  cities = ['New Delhi', 'Pune', 'Bangalore', "UP"];
  onAddJobPreference = new EventEmitter();
  onEditJobPreference = new EventEmitter();
  aboutMeForm: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  toggleRoles: boolean = false;
  toggleIntrest: boolean = false;
  toggleLocation: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<JobPrefrenceComponent>,

  ) { }

  role() {
    this.toggleRoles = !this.toggleRoles
  }
  
  intrest() {
    this.toggleIntrest = !this.toggleIntrest
  }

  location() {
    this.toggleLocation = !this.toggleLocation
  }


  ngOnInit(): void {
    this.aboutMeForm = this.fb.group({
      description: [null, [Validators.required]]
    });
    if (this.dialogData.action === "Update") {
      this.dialogAction = "Update";
      this.action = "Update";
      this.aboutMeForm.patchValue(this.dialogData.data);
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
    this.onAddJobPreference.emit();
  }

  edit = () => {
    var formData = this.aboutMeForm.value;
    var data = {
      id: this.dialogData.data.id,
      description: formData.name,
    }
    this.dialogRef.close();
    this.onEditJobPreference.emit();
  }

}
