import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MasterDateBottomSheetComponent } from '../../../../../../../shared/master-date-bottom-sheet/master-date-bottom-sheet.component';
import { Skills } from '../../../../../../../../data/skills';
import { location } from '../../../../../../../../data/locations';
import { Industry } from '../../../../../../../../data/industry';

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
  location: string[] = [];
  industries: string[] = [];
  department: string[] = [];


  constructor(private fb: FormBuilder) {
    this.skill = Skills;
    this.location = location;
    this.industries = Industry;
    // this.department = Depart
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



  selectedSkills: string[] = []
  openBottomSheetSkills(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDateBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedSkills,          // Pass stored selection
        typeData: 'Skills',
        placeholderMessage: 'Java, Angular, Python, React',
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedValues: string[]) => {
      if (selectedValues !== undefined) {
        this.selectedSkills = selectedValues;

        const csv = selectedValues.join(', ');   // comma + space
        this.basicSearch.get('skills')?.setValue(csv);
        this.basicSearch.get('skills')?.markAsTouched();
      }
    })

  }


  selectedLocation: string[] = []
  openBottomSheetLocation(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDateBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedLocation,          // Pass stored selection
        typeData: 'Location',
        placeholderMessage: 'Delhi, Noida, Gurgaon, Bangalore',
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedValues: string[]) => {
      if (selectedValues !== undefined) {
        this.selectedLocation = selectedValues;

        const csv = selectedValues.join(', ');   // comma + space
        this.basicSearch.get('prefLocation')?.setValue(csv);
        this.basicSearch.get('prefLocation')?.markAsTouched();
      }
    });
  }
  
  
  selectedIndustry: string[] = []
  openBottomSheetIndustry(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDateBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedIndustry,          // Pass stored selection
        typeData: 'Industry',
        placeholderMessage: 'Software Development, Marketing',
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedValues: string[]) => {
      if (selectedValues !== undefined) {
        this.selectedIndustry = selectedValues;

        const csv = selectedValues.join(', ');   // comma + space
        this.basicSearch.get('industry')?.setValue(csv);
        this.basicSearch.get('industry')?.markAsTouched();
      }
    });
  }
  
  selectedDepartment: string[] = []
  openBottomSheetDepartment(filterType: string[]): void {
    const bottomSheetRef = this._bottomSheet.open(MasterDateBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet',
      data: {
        filterType,
        selected: this.selectedDepartment,          // Pass stored selection
        typeData: 'Department',
        placeholderMessage: 'Software Development, Marketing',
      }
    });
    bottomSheetRef.afterDismissed().subscribe((selectedValues: string[]) => {
      if (selectedValues !== undefined) {
        this.selectedDepartment = selectedValues;

        const csv = selectedValues.join(', ');   // comma + space
        this.basicSearch.get('department')?.setValue(csv);
        this.basicSearch.get('department')?.markAsTouched();
      }
    });
  }


}
