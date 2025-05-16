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
  isChecked: boolean = false;
  roles: string[] = [];
  selected: string[] = [];
  search: string = '';
  allData: string[] = [];
  filterType: string = '';

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { filterType: string[] },
    private bottomSheetRef: MatBottomSheetRef<MasterDateBottomSheetComponent>,) {
    // this.roles = Role;
    // console.log("data.filterType", this.data)
    this.allData = this.data.filterType

  }

  // select(role: string): void {
  //   const index = this.selected.indexOf(role);
  //   if (index > -1) {
  //     this.selected.splice(index, 1);
  //   } else {
  //     this.selected.push(role);
  //   }
  // }

  @Output() selectedRolesChange = new EventEmitter<string[]>();
  select(role: string): void {
    const index = this.selected.indexOf(role);

    if (index === -1) {
      this.selected.push(role);
      // console.log(`Selected: ${role}`);
      // this.closeSheet();
    } else {
      this.selected.splice(index, 1);
      // console.log(`Unselected: ${role}`);
    }

    // console.log('Currently selected roles:', this.selected);
    // Emit the updated selection to the parent
    this.selectedRolesChange?.emit(this.selected);
  }


  // filter(): string[] {
  //   const term = this.search.toLowerCase();
  //   return this.allData.filter((role: any) => role.toLowerCase().includes(term));
  // }
  filter(): string[] {
    const term = this.search.toLowerCase();
    if (!Array.isArray(this.allData)) {
      return []; // or handle appropriately
    }
    return this.allData
      .filter((role: any) => role.toLowerCase().includes(term));
  }

  closeSheet(): void {
    this.bottomSheetRef.dismiss();
  }
}
