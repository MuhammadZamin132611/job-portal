import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'job-portal';
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Job Portal");
  }


  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
