import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasicDetailsComponent } from "../basic-details/basic-details.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { JobPrefrenceComponent } from "../job-prefrence/job-prefrence.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";

@Component({
  selector: 'app-profile',
  imports: [BasicDetailsComponent, AboutMeComponent, JobPrefrenceComponent, WorkExperienceComponent],
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
