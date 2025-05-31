import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MasterDateBottomSheetComponent } from '../../../../../../../shared/master-date-bottom-sheet/master-date-bottom-sheet.component';
import { Skills } from '../../../../../../../../data/skills';

@Component({
  selector: 'app-recuriter-basic-profile-search',
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './recuriter-basic-profile-search.component.html',
  styleUrl: './recuriter-basic-profile-search.component.scss'
})
export class RecuriterBasicProfileSearchComponent implements OnInit {
  noticePeriod = ["Immediate Joining", "15 Days or Less ", "1 Month or Less", "2 Month or Less", "3 Month or Less",];
  educationType = ["Part Time", "Full Time ",];
  basicSearch!: FormGroup;
  private _bottomSheet = inject(MatBottomSheet);
  skill: string[] = [];
  constructor(private fb: FormBuilder) {
    this.skill = Skills;
  }

  ngOnInit(): void {
    this.basicSearch = this.fb.group({
      searchTitle: ["", [Validators.required]],
      skills: ["", [Validators.required]],
      minExperience: ["", [Validators.required]],
      maxExperience: ["", [Validators.required]],
      salary: ["", [Validators.required]],
      prefLocation: ["", [Validators.required]],
      industry: ["",],
      department: ["",],
      designation: ["",],
      noticePeriod: ["",],
      highestQualification: [""],
      specialization: [""],
      educationType: [""],
    });
  }

  selectNoticePeriod(notice: string) {
    this.basicSearch.get('noticePeriod')?.setValue(notice);
    // this.basicSearch.get('noticePeriod')?.markAsTouched();
  }

  selectEducationType(education: string) {
    this.basicSearch.get('educationType')?.setValue(education);
    // this.basicSearch.get('educationType')?.markAsTouched();
  }

  submitForm(): void {
    if (this.basicSearch.valid) {
      console.log("Valid Form", this.basicSearch.value)
    }
    else {
      // Submit your valid form here
      this.basicSearch.markAllAsTouched(); // Show all error messages
      console.log("Invalid Form", this.basicSearch.value)
    }
  }


  selectedDegree: string = ''
  openBottomSheetDegree(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDateBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedDegree,
        typeData: 'Skills',
        placeholderMessage: 'Java, Angular, Puthon, React'
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedRole: string) => {
      if (selectedRole !== undefined) {
        // console.log('Selected Roles:', selectedRole);
        this.selectedDegree = selectedRole;
        this.basicSearch.get('skills')?.setValue(selectedRole);
        // this.workExperience.get('degree')?.markAsTouched();
      }
    });
  }


}
