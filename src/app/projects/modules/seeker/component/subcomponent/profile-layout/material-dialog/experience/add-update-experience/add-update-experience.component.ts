import { Component, EventEmitter, inject, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkExperienceComponent } from '../../../work-experience/work-experience.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Role } from '../../../../../../../../../data/role';
import { MasterDateBottomSheetComponent } from '../../../../../../shared/master-date-bottom-sheet/master-date-bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-update-experience',
  imports: [MaterialModule, ReactiveFormsModule, NgIf, NgFor, NgClass],
  templateUrl: './add-update-experience.component.html',
  styleUrl: './add-update-experience.component.scss'
})
export class AddUpdateExperienceComponent {
  empType = ["Part Time", "Full Time", "Contarct", "Internship",]
  noticePeriod = ["No Notice Period", "15 Days", "30 Days", "45 Days", "60 Days", "90 Days",]
  onAddWorkExperoence = new EventEmitter();
  onEditWorkExperoence = new EventEmitter();
  workExperience: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "new"
  maxDate: string;
  minDate: string;
  selectedEmpType: string | null = null; // or use index: number
  selectedNoticePeriod: string | null = null;
  private _bottomSheet = inject(MatBottomSheet);

  roles: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<WorkExperienceComponent>,
  ) {
    this.roles = Role
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = maxDate.toISOString().split('T')[0];
    this.minDate = maxDate.toISOString().split('T')[0];
  }

  openBottomSheet(filterType: string[]): void {
    this._bottomSheet.open(MasterDateBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: { filterType }
    });
  }

  selectedRolesFromChild: any
  onSelectedRolesChange(updatedRoles: Event) {
    // this.selectedRolesFromChild = updatedRoles;
    console.log('Received from child:', updatedRoles);
  }


  ngOnInit(): void {
    this.workExperience = this.fb.group({
      companyName: [null, [Validators.required]],
      jobRole: [null, [Validators.required]],
      department: [null, [Validators.required]],
      industryType: [null, [Validators.required]],
      location: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      empType: [null, [Validators.required]],
      noticePeriod: [null, [Validators.required]],
      description: [null, [Validators.required]],
      currentlyWorking: [false]
    }, { validators: this.dateValidator() });
    this.workExperience.get('currentlyWorking')?.valueChanges.subscribe((isChecked: boolean) => {
      const endDateControl = this.workExperience.get('endDate');
      if (isChecked) {
        endDateControl?.disable();
        endDateControl?.clearValidators();
      } else {
        endDateControl?.enable();
        endDateControl?.setValidators(Validators.required);
      }
      endDateControl?.updateValueAndValidity();
      this.workExperience.updateValueAndValidity(); // Re-validate group-level validator
    });
    if (this.dialogData.action === "Update") {
      this.dialogAction = "Update";
      this.action = "Update";
      this.text = "existing"
      this.workExperience.patchValue(this.dialogData.data);
    }
  }

  dateValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const start = group.get('startDate')?.value;
      const end = group.get('endDate')?.value;
      const currentlyWorking = group.get('currentlyWorking')?.value;
      if (!start || (!currentlyWorking && !end)) return null;
      const startDate = new Date(start);
      const endDate = currentlyWorking ? new Date() : new Date(end);
      return startDate > endDate ? { dateMismatch: true } : null;
    };
  }


  selectEmpType(emp: string) {
    this.workExperience.get('empType')?.setValue(emp);
    this.workExperience.get('empType')?.markAsTouched();
  }

  selectNoticePeriod(notice: string) {
    this.workExperience.get('noticePeriod')?.setValue(notice);
    this.workExperience.get('noticePeriod')?.markAsTouched();
  }


  editValidation(): void {
    if (this.workExperience.invalid) {
      this.workExperience.markAllAsTouched(); // Show all error messages
      console.log(`invalid ${this.dialogAction}`, this.workExperience.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log(`valid ${this.dialogAction}`, this.workExperience.value);
      this.edit();
    }

  }
  addValidation(): void {
    if (this.workExperience.invalid) {
      this.workExperience.markAllAsTouched(); // Show all error messages
      console.log(`invalid ${this.dialogAction}`, this.workExperience.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log(`valid ${this.dialogAction}`, this.workExperience.value);
      this.add();
    }

  }

  handelSubmit = () => {
    if (this.dialogAction === "Update") {
      this.editValidation();
    }
    else {
      this.addValidation();
    }
  }
  add = () => {
    var formData = this.workExperience.value;
    var data = {
      companyName: formData.name,
    }
    this.dialogRef.close();
    this.onAddWorkExperoence.emit();
  }

  edit = () => {
    var formData = this.workExperience.value;
    var data = {
      id: this.dialogData.data.id,
      companyName: formData.name,
    }
    this.dialogRef.close();
    this.onEditWorkExperoence.emit();
  }
}
