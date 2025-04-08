import { Component, Inject, model, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NgClass, NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Role } from '../../../../../data/role';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { location } from '../../../../../data/locations';

@Component({
  selector: 'app-filter-bottom-sheet',
  imports: [MaterialModule, NgIf, FormsModule, NgClass],
  templateUrl: './filter-bottom-sheet.component.html',
  styleUrl: './filter-bottom-sheet.component.scss'
})
export class FilterBottomSheetComponent implements OnInit {
  isChecked: boolean = false;
  roles: string[] = [];
  selectedRoles: string[] = [];
  searchRole: string = '';

  locations: string[] = [];
  selectedLocations: string[] = [];
  searchLocation: string = '';

  filterType: string = '';

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { filterType: string },
    private bottomSheetRef: MatBottomSheetRef<FilterBottomSheetComponent>,) {
    this.filterType = data.filterType;
    console.log("data.filterType", this.data)
    this.roles = Role;
    this.locations = location;
  }

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
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.filtered = this.locations.filter(location =>
        location.toLowerCase().includes(term.toLowerCase())
      );
    });
  }



  selectRole(role: string): void {
    const index = this.selectedRoles.indexOf(role);
    if (index > -1) {
      this.selectedRoles.splice(index, 1);
    } else {
      this.selectedRoles.push(role);
    }
  }
  selectLocation(location: string): void {
    const index = this.selectedLocations.indexOf(location);
    if (index > -1) {
      this.selectedLocations.splice(index, 1);
    } else {
      this.selectedLocations.push(location);
    }
  }

  filteredRoles(): string[] {
    const term = this.searchRole.toLowerCase();
    return this.roles.filter(role => role.toLowerCase().includes(term));
  }

  filteredLocation(): string[] {
    const term = this.searchLocation.toLowerCase();
    return this.locations.filter(location => location.toLowerCase().includes(term));
  }

  logSelectedRoles(): void {
    console.log('Selected Roles:', this.selectedRoles);
    this.closeSheet();
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

  units = ['Thousands', 'Lack', 'Crore'];
  selectedUnit = 'Lack';

  selectUnit(unit: string): void {
    this.selectedUnit = unit;
    console.log('Selected Unit:', this.selectedUnit);
  }


  startValue = 33;
  endValue = 55;

  sliderValue = 0;

  formatLabel(value: number): string {
    const unitMap: { [key: string]: string } = {
      Thousands: 'K',
      Lack: 'L',
      Crore: 'C',
    };
    return value + unitMap[this.selectedUnit];
  }


}
