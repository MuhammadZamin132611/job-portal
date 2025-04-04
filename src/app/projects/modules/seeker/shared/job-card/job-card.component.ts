import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-job-card',
  imports: [MaterialModule, NgClass],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() width: string = "w-full";
}
