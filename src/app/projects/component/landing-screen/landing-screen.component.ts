import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-screen',
  imports: [MaterialModule, RouterLink],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss'
})
export class LandingScreenComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Job Portal Landing Page");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
