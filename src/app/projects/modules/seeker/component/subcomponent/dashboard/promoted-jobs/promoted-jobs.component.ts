import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-promoted-jobs',
  imports: [],
  templateUrl: './promoted-jobs.component.html',
  styleUrl: './promoted-jobs.component.scss'
})
export class PromotedJobsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Promoted Jobs");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
