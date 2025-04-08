import { Component, Inject, model, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NgClass, NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Role } from '../../../../../data/role';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-filter-bottom-sheet',
  imports: [MaterialModule, NgIf, FormsModule, NgClass, ReactiveFormsModule],
  templateUrl: './filter-bottom-sheet.component.html',
  styleUrl: './filter-bottom-sheet.component.scss'
})
export class FilterBottomSheetComponent implements OnInit {
  isChecked: boolean = false;
  roles: string[] = [];
  selectedRoles: string[] = [];
  searchTerm: string = '';
  filterType: string = '';

  getDynamicClass() {
    switch (this.data.filterType) {
      case 'JobRoles': return 'rounded-t-2xl';
      case 'Salary': return 'rounded-t-lg';
      default: return 'rounded-none';
    }
  }
  searchControl = new FormControl();
  filtered: string[] = [];
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.filtered = this.roles.filter(role =>
        role.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

  
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { filterType: string },
    private bottomSheetRef: MatBottomSheetRef<FilterBottomSheetComponent>,) {
    this.filterType = data.filterType;
    console.log("data.filterType", this.data)
    this.roles = Role
  }

  selectRole(role: string): void {
    const index = this.selectedRoles.indexOf(role);
    if (index > -1) {
      this.selectedRoles.splice(index, 1);
    } else {
      this.selectedRoles.push(role);
    }
  }
  
  filteredRoles(): string[] {
    const term = this.searchTerm.toLowerCase();
    return this.roles.filter(role => role.toLowerCase().includes(term));
  }
  
  logSelectedRoles(): void {
    console.log('Selected Roles:', this.selectedRoles);
  }

  closeSheet(): void {
    this.bottomSheetRef.dismiss();
  }

  experienceLeve = [
    { experiencType: 'Fresher', model: false },
    { experiencType: '1 - 2 Years', model: false },
    { experiencType: '2 - 4 Years', model: false },
    { experiencType: 'More Then 5 Years', model: false },
  ];

  selectExperience(selected: any) {
    this.experienceLeve.forEach(item => {
      item.model = item === selected;
    });
  }

  freshenessLeve = [
    { freshenessType: 'All', model: false },
    { freshenessType: 'Last 24 hours', model: false },
    { freshenessType: 'Last 3 days', model: false },
    { freshenessType: 'Last  7 Days', model: false },
  ];

  selectFreshness(selected: any) {
    this.experienceLeve.forEach(item => {
      item.model = item === selected;
    });
  }



}
