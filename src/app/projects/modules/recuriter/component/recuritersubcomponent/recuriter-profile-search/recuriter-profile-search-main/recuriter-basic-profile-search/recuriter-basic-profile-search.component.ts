import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

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


}
