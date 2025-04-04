import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../shared/material.module';
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-subcomponent',
  imports: [MaterialModule, RouterOutlet, SidebarComponent, NgIf],
  templateUrl: './subcomponent.component.html',
  styleUrl: './subcomponent.component.scss'
})
export class SubcomponentComponent implements OnInit {

  advertisement: boolean = true;
  isMenuOpen: boolean = true;
  drawerMode: 'side' | 'over' = 'side';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private drawerService: SidebarService, private router: Router
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.checkDrawerVisibility(event.urlAfterRedirects);
    //   }
    // });
  }

  hiddenRoutes = ['/seeker/layout/dashboard', '/seeker/layout/dashboard/promoted-jobs'];

  checkDrawerVisibility(currentRoute: string) {
    const shouldHideDrawer = this.hiddenRoutes.includes(currentRoute);
    this.isMenuOpen = !shouldHideDrawer;
    this.advertisement = !shouldHideDrawer;
  }
  ngOnInit() {

    this.checkDrawerVisibility(this.router.url);

    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkDrawerVisibility(event.urlAfterRedirects);
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Handset,
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small] || result.breakpoints[Breakpoints.Handset]) {
        // For screens ≤ 767px (mobile)
        this.drawerMode = 'over';
        this.advertisement = false;
        this.isMenuOpen = false;
        this.drawerService.setDrawerState(false);
      } else {
        // For screens > 767px (tablet & desktop)
        this.drawerMode = 'side';
        this.isMenuOpen = true;
        this.advertisement = !result.breakpoints[Breakpoints.Medium]; // Show ad only on large screens
        this.drawerService.setDrawerState(true);
      }
    });

    // Keep sidebar state synced with service
    this.drawerService.isOpen$.subscribe(state => {
      this.isMenuOpen = state;
    });


  }

  toggleMenu() {
    this.drawerService.toggleDrawer();
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
