import { Component, EventEmitter, Inject } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasicDetailsComponent } from '../../basic-details/basic-details.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-update-about-me',
  imports: [MaterialModule, ReactiveFormsModule, NgIf],
  templateUrl: './add-update-about-me.component.html',
  styleUrl: './add-update-about-me.component.scss'
})
export class AddUpdateAboutMeComponent {
  onAddAboutMe = new EventEmitter();
  onEditAcoutMe = new EventEmitter();
  aboutMeForm: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BasicDetailsComponent>,

  ) { }

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
        this.onAddAboutMe.emit();
    // this.categoryService.add(data).subscribe({
    //   next: (res: any) => {
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

  edit = () => {
    var formData = this.aboutMeForm.value;
    var data = {
      id: this.dialogData.data.id,
      description: formData.name,
    }
        this.dialogRef.close();
        this.onEditAcoutMe.emit();
    // this.categoryService.update(data).subscribe({
    //   next: (res: any) => {
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
