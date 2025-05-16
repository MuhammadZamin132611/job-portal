import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { Role } from '../../../../../data/role';
import { location } from '../../../../../data/locations';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-master-date-bottom-sheet',
  imports: [MaterialModule, NgIf, FormsModule,],
  templateUrl: './master-date-bottom-sheet.component.html',
  styleUrl: './master-date-bottom-sheet.component.scss'
})
export class MasterDateBottomSheetComponent {
  selected: string[] = [];
  search: string = '';
  allData: string[] = [];
  filterType: string = '';

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { filterType: string[], selected: string[] },
    private bottomSheetRef: MatBottomSheetRef<MasterDateBottomSheetComponent>,) {
    this.allData = this.data.filterType;
    this.selected = [...(this.data.selected || [])];
  }
  select(role: string): void {
    const index = this.selected.indexOf(role);
    if (index === -1) {
      this.selected.push(role);
      this.closeSheet();
    } else {
      this.selected.splice(index, 1);
    }
  }

  filter(): string[] {
    const term = this.search.toLowerCase();
    if (!Array.isArray(this.allData)) {
      return [];
    }
    return this.allData
      .filter((role: any) => role.toLowerCase().includes(term));
  }

  closeSheet(): void {
    this.bottomSheetRef.dismiss(this.selected); // Send selected data to parent
  }
}
