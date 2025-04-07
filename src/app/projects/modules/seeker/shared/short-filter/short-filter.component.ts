import { Component, inject, model } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterBottomSheetComponent } from '../filter-bottom-sheet/filter-bottom-sheet.component';

@Component({
  selector: 'app-short-filter',
  imports: [MaterialModule],
  templateUrl: './short-filter.component.html',
  styleUrl: './short-filter.component.scss'
})
export class ShortFilterComponent {
  private _bottomSheet = inject(MatBottomSheet);

  constructor() {

  }

  filterList = [
    { filterType: 'Experience Level', model: true },
    { filterType: 'Freshness', model: true },
    { filterType: 'Job Roles', model: true },
    { filterType: 'Job City', model: true },
    { filterType: 'Salary', model: true },
    { filterType: 'Work From Home ', model: false },
    { filterType: 'Full Time', model: false },
    { filterType: 'Part Time', model: false },
    { filterType: 'No English', model: false },
    { filterType: 'Night Shift', model: false },
    { filterType: 'Day Shift', model: false },
  ];

  openBottomSheet(filterType: string): void {
    this._bottomSheet.open(FilterBottomSheetComponent, {
      data: { filterType }
    });
  }

}
