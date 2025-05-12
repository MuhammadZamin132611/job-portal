import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-other-skills',
  imports: [MaterialModule, NgFor],
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.scss'
})
export class OtherSkillsComponent {
  skills = ['New Delhi', 'Pune', 'Bangalore', "UP",];
}
