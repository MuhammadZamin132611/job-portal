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
      iconName: 'dashboard',
      listName: 'Dashboard',
      link: '/recuriter/layout/dashboard'
    },
    {
      iconName: 'person_search',
      listName: 'Profile Search',
      link: '/recuriter/layout/profile-search'
    },
  ]

}

interface list {
  iconName: string;
  listName: string;
  link: string;
}
