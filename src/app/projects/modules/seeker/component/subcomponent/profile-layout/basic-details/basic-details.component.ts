import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { ProfileComponent } from "../profile/profile.component";
import { ProfileImageComponent } from "../../../../shared/profile-image/profile-image.component";

@Component({
  selector: 'app-basic-details',
  imports: [MaterialModule, ProfileImageComponent],
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.scss'
})
export class BasicDetailsComponent {

}
