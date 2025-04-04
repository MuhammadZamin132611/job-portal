import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promoted-jobs',
  imports: [RouterLink],
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
