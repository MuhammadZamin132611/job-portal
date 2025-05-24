import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-messages',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './recuriter-messages.component.html',
  styleUrl: './recuriter-messages.component.scss'
})
export class RecuriterMessagesComponent {

}
