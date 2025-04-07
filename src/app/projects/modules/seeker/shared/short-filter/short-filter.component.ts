import { Component, model } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-short-filter',
  imports: [MaterialModule],
  templateUrl: './short-filter.component.html',
  styleUrl: './short-filter.component.scss'
})
export class ShortFilterComponent {

  filterList = [
    { filterType: 'Experience Level', model: true },
    { filterType: 'Freshness', model: true },
    { filterType: 'Job Roles ', model: true },
    { filterType: 'Work From Home ', model: false },
    { filterType: 'Full Time', model: false },
    { filterType: 'Part Time', model: false },
    { filterType: 'Job City', model: true },
    { filterType: 'No English', model: false },
    { filterType: 'Night Shift', model: false },
    { filterType: 'Day Shift', model: false },
    { filterType: 'Salary', model: true },
  ];
}
