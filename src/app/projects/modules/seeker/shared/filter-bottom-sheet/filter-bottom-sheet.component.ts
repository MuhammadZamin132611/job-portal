import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-filter-bottom-sheet',
  imports: [MaterialModule, NgIf],
  templateUrl: './filter-bottom-sheet.component.html',
  styleUrl: './filter-bottom-sheet.component.scss'
})
export class FilterBottomSheetComponent {
  filterType: string = '';
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { filterType: string }) 
  {
    this.filterType = data?.filterType || 'Default';
    console.log("data.filterType",this.data)
  }
  
}
