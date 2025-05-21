import { Component, EventEmitter, inject, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EducationComponent } from '../../../education/education.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { highestQualification } from '../../../../../../../../../data/highestQualification';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MasterDataRadioBottomSheetComponent } from '../../../../../../shared/master-data-radio-bottom-sheet/master-data-radio-bottom-sheet.component';
import { Courses } from '../../../../../../../../../data/course';
import { Specialization } from '../../../../../../../../../data/specialization';


@Component({
  selector: 'app-add-edit-education',
  imports: [MaterialModule, NgIf, NgFor, NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './add-edit-education.component.html',
  styleUrl: './add-edit-education.component.scss'
})
export class AddEditEducationComponent {
  educationType = ["Part Time", "Full Time", "Distance Learning", "Other"]
  onAddEducation = new EventEmitter();
  onEditEducation = new EventEmitter();
  education: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "Add your new education details."
  maxDate: string;
  minDate: string;
  qualification: string[] = []
  private _bottomSheet = inject(MatBottomSheet);
  course: string[] = [];
  specializa: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EducationComponent>,
  ) {
    this.qualification = highestQualification;
    this.specializa = Specialization;
    this.course = Courses;
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = maxDate.toISOString().split('T')[0];
    this.minDate = maxDate.toISOString().split('T')[0];
  }

  selectEmpType(emp: string) {
    this.education.get('qualification')?.setValue(emp);
    this.education.get('qualification')?.markAsTouched();
  }

  ngOnInit(): void {
    this.education = this.fb.group({
      collageSchool: [null, [Validators.required]],
      qualification: [null, [Validators.required]],
      educationType: [null, [Validators.required]],
      degree: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      // empType: [null, [Validators.required]],
      // noticePeriod: [null, [Validators.required]],
      // description: [null, [Validators.required]],
      currentlyWorking: [false]
    }, { validators: this.dateValidator() });
    this.education.get('currentlyWorking')?.valueChanges.subscribe((isChecked: boolean) => {
      const endDateControl = this.education.get('endDate');
      if (isChecked) {
        endDateControl?.disable();
        endDateControl?.clearValidators();
      } else {
        endDateControl?.enable();
        endDateControl?.setValidators(Validators.required);
      }
      endDateControl?.updateValueAndValidity();
      this.education.updateValueAndValidity(); // Re-validate group-level validator
    });
    if (this.dialogData.action === "Edit") {
      this.dialogAction = "Edit";
      this.action = "Save";
      this.text = "Edit your education details."
      this.education.patchValue(this.dialogData.data);
    }
  }

  selectedEducationType: string = ''
  openBottomSheetEducationType(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDataRadioBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedEducationType,
        typeData: 'Education Type',
        placeholderMessage: 'Full Time'
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedRole: string) => {
      if (selectedRole !== undefined) {
        // console.log('Selected Roles:', selectedRole);
        this.selectedEducationType = selectedRole;
        this.education.get('educationType')?.setValue(selectedRole);
        // this.workExperience.get('educationType')?.markAsTouched();
      }
    });
  }

  selectedDegree: string = ''
  openBottomSheetDegree(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDataRadioBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedDegree,
        typeData: 'Degree',
        placeholderMessage: 'B.Tech'
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedRole: string) => {
      if (selectedRole !== undefined) {
        // console.log('Selected Roles:', selectedRole);
        this.selectedDegree = selectedRole;
        this.education.get('degree')?.setValue(selectedRole);
        // this.workExperience.get('degree')?.markAsTouched();
      }
    });
  }

  selectedSpecialization: string = ''
  openBottomSheetSpecialization(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDataRadioBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedSpecialization,
        typeData: 'Specialization',
        placeholderMessage: 'Computer Science'
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedRole: string) => {
      if (selectedRole !== undefined) {
        // console.log('Selected Roles:', selectedRole);
        this.selectedSpecialization = selectedRole;
        this.education.get('specialization')?.setValue(selectedRole);
        // this.workExperience.get('specialization')?.markAsTouched();
      }
    });
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


  handelSubmit = () => {
    if (this.dialogAction === "Edit") {
      this.editValidation();
    }
    else {
      this.addValidation();
    }
  }

  editValidation(): void {
    if (this.education.invalid) {
      this.education.markAllAsTouched(); // Show all error messages
      console.log(`invalid ${this.dialogAction}`, this.education.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log(`valid ${this.dialogAction}`, this.education.value);
      this.edit();
    }

  }
  addValidation(): void {
    if (this.education.invalid) {
      this.education.markAllAsTouched(); // Show all error messages
      console.log(`invalid ${this.dialogAction}`, this.education.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log(`valid ${this.dialogAction}`, this.education.value);
      this.add();
    }

  }


  add = () => {
    var formData = this.education.value;
    var data = {
      companyName: formData.name,
    }
    this.dialogRef.close();
    this.onAddEducation.emit();
  }

  edit = () => {
    var formData = this.education.value;
    var data = {
      id: this.dialogData.data.id,
      companyName: formData.name,
    }
    this.dialogRef.close();
    this.onEditEducation.emit();
  }
}
