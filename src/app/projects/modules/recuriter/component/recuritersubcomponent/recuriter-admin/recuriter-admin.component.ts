import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-admin',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './recuriter-admin.component.html',
  styleUrl: './recuriter-admin.component.scss'
})
export class RecuriterAdminComponent {

}
