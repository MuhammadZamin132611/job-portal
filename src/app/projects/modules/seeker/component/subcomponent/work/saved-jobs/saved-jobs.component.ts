import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-saved-jobs',
  imports: [],
  templateUrl: './saved-jobs.component.html',
  styleUrl: './saved-jobs.component.scss'
})
export class SavedJobsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Saved Jobs");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
