import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../shared/material.module';
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-subcomponent',
  imports: [MaterialModule, RouterOutlet, SidebarComponent],
  templateUrl: './subcomponent.component.html',
  styleUrl: './subcomponent.component.scss'
})
export class SubcomponentComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isMenuOpen: boolean = true;

  constructor(private router:Router){}
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
