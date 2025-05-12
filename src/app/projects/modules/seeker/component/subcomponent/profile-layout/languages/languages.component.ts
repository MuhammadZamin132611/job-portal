import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [MaterialModule, NgFor],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  languages = ['Hindi', 'Urdu', 'English', "Tamil"];

}
