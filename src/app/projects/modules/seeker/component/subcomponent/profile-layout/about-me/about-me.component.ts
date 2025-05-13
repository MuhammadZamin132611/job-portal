import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUpdateAboutMeComponent } from '../material-dialog/add-update-about-me/add-update-about-me.component';

@Component({
  selector: 'app-about-me',
  imports: [MaterialModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  handelAddAction = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Add'
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddUpdateAboutMeComponent, dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddAboutMe.subscribe({
      next:(res:any)=>{
        // this.tableData();
      }
    });
  }

  handelEditAction = (values: any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Update',
      data:values
    }
    dialogConfig.width = "650px";
    const dialogRef = this.dialog.open(AddUpdateAboutMeComponent, dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditAcoutMe.subscribe({
      next:(res:any)=>{
        // this.tableData();
      }
    });
  }
}
