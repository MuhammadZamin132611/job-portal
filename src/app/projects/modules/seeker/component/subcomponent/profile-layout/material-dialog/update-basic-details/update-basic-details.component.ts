import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasicDetailsComponent } from '../../basic-details/basic-details.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-basic-details',
  imports: [MaterialModule, ReactiveFormsModule, NgIf],
  templateUrl: './update-basic-details.component.html',
  styleUrl: './update-basic-details.component.scss'
})
export class UpdateBasicDetailsComponent {

  onUpdateBasicDetails = new EventEmitter();
  dialogAction: any = 'Add';
  action: any = 'Add';
  responseMessage: any;
  basicDetailsForm: any = FormGroup;
  maxDate: string;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<BasicDetailsComponent>,
    private fb: FormBuilder,
  ) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = maxDate.toISOString().split('T')[0]; // e.g., "2007-05-13"


  }

  ngOnInit(): void {
    this.basicDetailsForm = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      gender: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      pin: [null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      city: [null, [Validators.required]],

    });
    if (this.dialogData.action === "Update") {
      this.dialogAction = "Update";
      this.action = "Update";
      this.basicDetailsForm.patchValue(this.dialogData.data);
    }
  }

  onlyMobileNumberKey(event: Event): boolean {
    const e = event as KeyboardEvent;
    const charCode = e.which ? e.which : e.keyCode;

    // Allow only digits (0–9)
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
      return false;
    }
    return true;
  }
  onlyPinCodeKey(event: Event): boolean {
    const e = event as KeyboardEvent;
    const charCode = e.which ? e.which : e.keyCode;

    // Allow only digits (0–9)
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
      return false;
    }
    return true;
  }





  validation(): void {
    if (this.basicDetailsForm.invalid) {
      this.basicDetailsForm.markAllAsTouched(); // Show all error messages
      console.log("invalid", this.basicDetailsForm.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log("valid", this.basicDetailsForm.value);
      this.edit();
    }

  }


  handelSubmit(): void {
    if (this.dialogAction === "Edit") {
      this.validation();
    }
    else {
      this.add();
    }
  }



  add() {

  }

  edit = () => {
    var formData = this.basicDetailsForm.value;
    console.log("edit", formData)
    var data = {
      id: this.dialogData.data.id,
      name: formData.name,
    }
    this.onUpdateBasicDetails.emit();
    this.dialogRef.close();
    // this.categoryService.update(data).subscribe({
    //   next: (res: any) => {
    //     this.dialogRef.close();
    //     this.onEditCategory.emit();
    //     this.responseMessage = res.message;
    //     this.snakbarService.openSnackBar(this.responseMessage, "success")
    //   }, error: (error: any) => {
    //     this.dialogRef.close();
    //     if (error.error?.message) {
    //       this.responseMessage = error.error?.message;
    //     } else {
    //       this.responseMessage = GlobalConstants.genericError;
    //     }
    //     this.snakbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    //   }
    // })
  }
}
