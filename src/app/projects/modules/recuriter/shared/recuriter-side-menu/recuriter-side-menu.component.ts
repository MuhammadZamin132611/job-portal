import { Component } from '@angular/core';
import { RecuriterProfileImageComponent } from "../recuriter-profile-image/recuriter-profile-image.component";
import { MaterialModule } from '../../../../shared/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-recuriter-side-menu',
  imports: [RecuriterProfileImageComponent, MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './recuriter-side-menu.component.html',
  styleUrl: './recuriter-side-menu.component.scss'
})
export class RecuriterSideMenuComponent {

  constructor(private sidebarService: SidebarService) { }
    
    toggleMenu() {
      this.sidebarService.toggleDrawer();
    }

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
      link: '/recuriter/layout/admin'
    },
    {
      iconName: 'groups_outline',
      listName: 'Team',
      link: '/recuriter/layout/team'
    },
    {
      iconName: 'sms_outline',
      listName: 'Messages',
      link: '/recuriter/layout/messages'
    },
    {
      iconName: 'live_help_outline',
      listName: 'Help & Support',
      link: '/recuriter/layout/help-support'
    },
  ]

}

interface list {
  iconName: string;
  listName: string;
  link: string;
}
