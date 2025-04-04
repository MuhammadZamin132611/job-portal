import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../../../shared/material.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Dashboard");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
