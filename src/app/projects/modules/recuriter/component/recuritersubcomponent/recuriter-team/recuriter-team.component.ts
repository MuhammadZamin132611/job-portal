import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recuriter-team',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './recuriter-team.component.html',
  styleUrl: './recuriter-team.component.scss'
})
export class RecuriterTeamComponent {

}
