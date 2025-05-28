import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuriter-profile-search-main',
  imports: [MaterialModule, CommonModule],
  templateUrl: './recuriter-profile-search-main.component.html',
  styleUrl: './recuriter-profile-search-main.component.scss'
})
export class RecuriterProfileSearchMainComponent {
  typeOfSearch: string = "Basic Information";
  onOff: string = "Off";
  toggleSearch: boolean = false;

  onToggle(event: any) {
    this.toggleSearch = event.target.checked
    if (this.toggleSearch) {
      this.typeOfSearch = "Boolaen Search";
      this.onOff = "On";
    } else {
      this.typeOfSearch = "Basic Information";
      this.onOff = "Off";
    }
  }
}
