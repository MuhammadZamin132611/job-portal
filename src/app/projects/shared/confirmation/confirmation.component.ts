import { Component, EventEmitter, Inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  imports: [MaterialModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  onEmitStatusChange = new EventEmitter();
  details: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit(): void {
    if (this.dialogData) {
      this.details = this.dialogData;   
    }
  }

  hendelChangeAction = () => {
    this.onEmitStatusChange.emit();
  }
}
