import { Component } from '@angular/core';
import { RecuriterProfileImageComponent } from "../recuriter-profile-image/recuriter-profile-image.component";
import { MaterialModule } from '../../../../shared/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recuriter-side-menu',
  imports: [RecuriterProfileImageComponent, MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './recuriter-side-menu.component.html',
  styleUrl: './recuriter-side-menu.component.scss'
})
export class RecuriterSideMenuComponent {

  menuList: list[] = [
    {
      iconName: 'dashboard_outline',
      listName: 'Dashboard',
      link: '/recuriter/layout/dashboard'
    },
    {
      iconName: 'person_search_outline',
      listName: 'Profile Search',
      link: '/recuriter/layout/profile-search'
    },
    {
      iconName: 'work_outline',
      listName: 'Requirements',
      link: '/recuriter/layout/requirement'
    },
    {
      iconName: 'admin_panel_settings_outline',
      listName: 'Admin',
      link: ''
    },
    {
      iconName: 'groups_outline',
      listName: 'Team',
      link: ''
    },
    {
      iconName: 'sms_outline',
      listName: 'Messages',
      link: ''
    },
    {
      iconName: 'live_help_outline',
      listName: 'Help & Support',
      link: ''
    },
  ]

}

interface list {
  iconName: string;
  listName: string;
  link: string;
}
