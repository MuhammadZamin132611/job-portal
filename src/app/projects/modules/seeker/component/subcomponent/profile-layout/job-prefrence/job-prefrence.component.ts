import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-job-prefrence',
  imports: [MaterialModule, NgFor],
  templateUrl: './job-prefrence.component.html',
  styleUrl: './job-prefrence.component.scss'
})
export class JobPrefrenceComponent {
  cities = ['New Delhi', 'Pune', 'Bangalore', "UP"];
  interestArea = ['Java Developer', 'Web Developer', 'Androide Development'];

}
