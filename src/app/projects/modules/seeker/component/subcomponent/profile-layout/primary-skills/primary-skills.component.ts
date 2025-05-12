import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-primary-skills',
  imports: [MaterialModule, NgFor, NgClass, NgStyle],
  templateUrl: './primary-skills.component.html',
  styleUrl: './primary-skills.component.scss'
})
export class PrimarySkillsComponent {
   
  skills = [
    { name: "JavaScript", percentage: 9 },
    { name: "Angular", percentage: 7 },
    { name: "TypeScript", percentage: 4 },
    { name: "HTML", percentage: 8 },
    { name: "CSS", percentage: 6 },
    { name: "Node.js", percentage: 3 }
  ]


 



}
