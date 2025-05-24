import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recuriter-profile-search',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './recuriter-profile-search.component.html',
  styleUrl: './recuriter-profile-search.component.scss'
})
export class RecuriterProfileSearchComponent {

}
