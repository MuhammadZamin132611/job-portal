import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasicDetailsComponent } from '../../basic-details/basic-details.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-update-basic-details',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './update-basic-details.component.html',
  styleUrl: './update-basic-details.component.scss'
})
export class UpdateBasicDetailsComponent {
  onUpdateBasicDetails = new EventEmitter();
  dialogAction: any = 'Add';
  action: any = 'Add';
  responseMessage: any;
  basicDetailsForm: any = FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<BasicDetailsComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.basicDetailsForm = this.fb.group({
      fullName: [null, [Validators.required]]
    });
    if (this.dialogData.action === "Update") {
      this.dialogAction = "Update";
      this.action = "Update";
      this.basicDetailsForm.patchValue(this.dialogData.data);
    }
  }

  handelSubmit = () => {
    if (this.dialogAction === "Update") {
      this.edit();
    }

  }

  edit = () => {
    var formData = this.basicDetailsForm.value;
    var data = {
      id: this.dialogData.data.id,
      name: formData.name,
    }
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
