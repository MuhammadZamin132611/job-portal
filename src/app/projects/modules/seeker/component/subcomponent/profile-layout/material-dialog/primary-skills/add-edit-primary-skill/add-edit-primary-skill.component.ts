import { Component, EventEmitter, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PrimarySkillsComponent } from '../../../primary-skills/primary-skills.component';
import { MaterialModule } from '../../../../../../../../shared/material.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MasterDataRadioBottomSheetComponent } from '../../../../../../shared/master-data-radio-bottom-sheet/master-data-radio-bottom-sheet.component';
import { Skills } from '../../../../../../../../../data/skills';

@Component({
  selector: 'app-add-edit-primary-skill',
  imports: [MaterialModule],
  templateUrl: './add-edit-primary-skill.component.html',
  styleUrl: './add-edit-primary-skill.component.scss'
})
export class AddEditPrimarySkillComponent implements OnInit {
  onAddPrimarySkill = new EventEmitter();
  onEditPrimarySkill = new EventEmitter();
  primarySkill: any = FormGroup;
  dialogAction: any = 'Add';
  action: any = 'Add';
  text: any = "Add primary skills to your profile";
  private _bottomSheet = inject(MatBottomSheet);
  skill: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PrimarySkillsComponent>,
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
      this.text = "Edit primary skills to your profile."
      // this.primarySkill.patchValue(this.dialogData.data);
    }
  }

  selectedPrimarySkill: string = ''
  openBottomSheetEducationType(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDataRadioBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedPrimarySkill,
        typeData: 'Primary Skill',
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
      companyName: formData.name,
    }
    this.dialogRef.close();
    this.onAddPrimarySkill.emit();
  }

  edit = () => {
    var formData = this.primarySkill.value;
    var data = {
      id: this.dialogData.data.id,
      companyName: formData.name,
    }
    this.dialogRef.close();
    this.onEditPrimarySkill.emit();
  }
}
