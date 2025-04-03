import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jobs',
  imports: [MaterialModule, RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Jobs");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
