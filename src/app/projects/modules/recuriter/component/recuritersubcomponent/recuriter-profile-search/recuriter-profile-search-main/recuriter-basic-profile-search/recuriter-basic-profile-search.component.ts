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
    });
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
