import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasicDetailsComponent } from "../basic-details/basic-details.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { JobPrefrenceComponent } from "../job-prefrence/job-prefrence.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { EducationComponent } from "../education/education.component";
import { PrimarySkillsComponent } from "../primary-skills/primary-skills.component";
import { OtherSkillsComponent } from "../other-skills/other-skills.component";
import { CerificationComponent } from "../cerification/cerification.component";
import { ProjectsComponent } from "../projects/projects.component";
import { AchievmentsComponent } from "../achievments/achievments.component";
import { LanguagesComponent } from "../languages/languages.component";

@Component({
  selector: 'app-profile',
  imports: [BasicDetailsComponent, AboutMeComponent, JobPrefrenceComponent, WorkExperienceComponent, EducationComponent, PrimarySkillsComponent, OtherSkillsComponent, CerificationComponent, ProjectsComponent, AchievmentsComponent, LanguagesComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Profile");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
