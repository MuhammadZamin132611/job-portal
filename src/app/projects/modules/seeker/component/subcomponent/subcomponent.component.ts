import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../shared/material.module';
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-subcomponent',
  imports: [MaterialModule, RouterOutlet, SidebarComponent],
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
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.drawerMode = 'over';
        this.advertisement = false;
        this.isMenuOpen = false;
        this.drawerService.setDrawerState(false);
      } else {
        this.drawerMode = 'side';
        this.isMenuOpen = true;
        this.advertisement = true;
        this.drawerService.setDrawerState(true);
      }
    });

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
