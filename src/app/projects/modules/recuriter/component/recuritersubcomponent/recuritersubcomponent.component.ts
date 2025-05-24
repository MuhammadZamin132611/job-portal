import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';
import { ConfirmationComponent } from '../../../../shared/confirmation/confirmation.component';
import { RecuriterProfileImageComponent } from "../../shared/recuriter-profile-image/recuriter-profile-image.component";
import { RecuriterSideMenuComponent } from "../../shared/recuriter-side-menu/recuriter-side-menu.component";

@Component({
  selector: 'app-recuritersubcomponent',
  imports: [MaterialModule, RouterOutlet, RecuriterProfileImageComponent, RecuriterSideMenuComponent],
  templateUrl: './recuritersubcomponent.component.html',
  styleUrl: './recuritersubcomponent.component.scss'
})
export class RecuritersubcomponentComponent implements OnInit {
  advertisement: boolean = true;
  isMenuOpen: boolean = true;
  drawerMode: 'side' | 'over' = 'side';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private dialog: MatDialog,
    private drawerService: SidebarService
  ) { }


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
