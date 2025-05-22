import { Component, EventEmitter, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OtherSkillsComponent } from '../../../other-skills/other-skills.component';
import { Skills } from '../../../../../../../../../data/skills';
import { MasterDataRadioBottomSheetComponent } from '../../../../../../shared/master-data-radio-bottom-sheet/master-data-radio-bottom-sheet.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-edit-other-skills',
  imports: [MaterialModule, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './add-edit-other-skills.component.html',
  styleUrl: './add-edit-other-skills.component.scss'
})
export class AddEditOtherSkillsComponent {
  onAddOtherSkill = new EventEmitter();
  onEditOtherSkill = new EventEmitter();
  primarySkill: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "Add other skills to your profile.";
  private _bottomSheet = inject(MatBottomSheet);
  skill: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OtherSkillsComponent>,
  ) {
    this.skill = Skills
  }

  ngOnInit(): void {
    this.primarySkill = this.fb.group({
      skill: [null, [Validators.required]],
    })
    if (this.dialogData.action === "Edit") {
      this.dialogAction = "Edit";
      this.action = "Save";
      this.text = "Edit other skills to your profile."
      // this.primarySkill.patchValue(this.dialogData.data);
    }
  }

  selectedPrimarySkill: string = ''
  openBottomSheetSkill(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDataRadioBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedPrimarySkill,
        typeData: 'Other Skills',
        placeholderMessage: 'Java, Python'
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedRole: string) => {
      if (selectedRole !== undefined) {
        // console.log('Selected Roles:', selectedRole);
        this.selectedPrimarySkill = selectedRole;
        this.primarySkill.get('skill')?.setValue(selectedRole);
        this.primarySkill.get('skill')?.markAsTouched();
      }
    });
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
    if (this.primarySkill.invalid) {
      this.primarySkill.markAllAsTouched(); // Show all error messages
      console.log(`invalid ${this.dialogAction}`, this.primarySkill.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log(`valid ${this.dialogAction}`, this.primarySkill.value);
      this.edit();
    }

  }
  addValidation(): void {
    if (this.primarySkill.invalid) {
      this.primarySkill.markAllAsTouched(); // Show all error messages
      console.log(`invalid ${this.dialogAction}`, this.primarySkill.value);
      return;
    }
    else {
      // Submit your valid form here
      console.log(`valid ${this.dialogAction}`, this.primarySkill.value);
      this.add();
    }

  }


  add = () => {
    var formData = this.primarySkill.value;
    var data = {
      skill: formData.name,
    }
    this.dialogRef.close();
    this.onAddOtherSkill.emit();
  }

  edit = () => {
    var formData = this.primarySkill.value;
    var data = {
      id: this.dialogData.data.id,
      skill: formData.name,
    }
    this.dialogRef.close();
    this.onEditOtherSkill.emit();
  }
}
