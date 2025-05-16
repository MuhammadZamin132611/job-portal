import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-master-data-radio-bottom-sheet',
  imports: [MaterialModule, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './master-data-radio-bottom-sheet.component.html',
  styleUrl: './master-data-radio-bottom-sheet.component.scss'
})
export class MasterDataRadioBottomSheetComponent {
  selected: string = '';
  search: string = '';
  allData: string[] = [];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { filterType: string[]; selected: string, typeData: string, placeholderMessage:string },
    private bottomSheetRef: MatBottomSheetRef<MasterDataRadioBottomSheetComponent>
  ) {
    this.allData = this.data.filterType || [];
    this.selected = this.data.selected || '';
  }

  select(role: string): void {
    if (this.selected === role) {
      this.remove(); // Deselect and close
    } else {
      this.selected = role;
      this.closeSheet(); // Select and close
    }
  }

  remove(): void {
    this.selected = '';
    this.closeSheet();
  }

  filter(): string[] {
    const term = this.search.toLowerCase();
    return this.allData.filter((role) =>
      role.toLowerCase().includes(term)
    );
  }

  closeSheet(): void {
    this.bottomSheetRef.dismiss(this.selected); // Return the selected value (or empty string)
  }

}
