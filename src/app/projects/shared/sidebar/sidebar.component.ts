import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  navbarList = [
    {
      icon: 'dashboard_outline',
      listName: 'Dashboard',
      link: '/seeker/layout/dashboard',
    },
    {
      icon: 'work_outline',
      listName: 'Jobs',
      link: '/seeker/layout/jobs',
    },
  ]

}
