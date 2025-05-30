import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-requirement-main',
  imports: [CommonModule, MaterialModule],
  templateUrl: './recuriter-requirement-main.component.html',
  styleUrl: './recuriter-requirement-main.component.scss',
})
export class RecuriterRequirementMainComponent {
  selectedPeriod = 'All';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }



  data = [
    { icon: "work_outline", name: 'All', count: '235', iconColor: 'text-[#0175A2]', },
    { icon: "flash_on_outline", name: 'Active', count: '65', iconColor: 'text-[#21A14B]', },
    { icon: "work_outline", name: 'InActive', count: '25', iconColor: 'text-[#F79009]' },
    { icon: "thumb_up_outline", name: 'Closed', count: '125', iconColor: 'text-[#4E5BA6]', },
    { icon: "star_outline", name: 'Bookmarked', count: '15', iconColor: 'text-[#9E77ED]', },
  ];

  jobCondition: boolean = true;
  condition() {
    this.jobCondition = !this.jobCondition;
  }
}
