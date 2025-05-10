import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../shared/material.module';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { AdvertisementComponent } from '../../../../shared/advertisement/advertisement.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { ProfileImageComponent } from "../../shared/profile-image/profile-image.component";

@Component({
  selector: 'app-subcomponent',
  imports: [MaterialModule, RouterOutlet, SidebarComponent, RouterLink, AdvertisementComponent, ProfileImageComponent],
  templateUrl: './subcomponent.component.html',
  styleUrl: './subcomponent.component.scss'
})
export class SubcomponentComponent implements OnInit {

  advertisement: boolean = true;
  isMenuOpen: boolean = true;
  drawerMode: 'side' | 'over' = 'side';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private drawerService: SidebarService, private router: Router,
    private dialog: MatDialog
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.checkDrawerVisibility(event.urlAfterRedirects);
    //   }
    // });

    // let date = new Date("2024-03-25");
    // date.setDate(date.getDate()+60);
    // console.log(date.toString());
  }


  ngOnInit() {
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


  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Logout'
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const response = dialogRef.componentInstance.onEmitStatusChange.subscribe((response: any) => {
      dialogRef.close();
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    })
  }
}
