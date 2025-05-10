import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasicDetailsComponent } from "../basic-details/basic-details.component";

@Component({
  selector: 'app-profile',
  imports: [BasicDetailsComponent],
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
