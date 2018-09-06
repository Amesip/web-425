import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UnicornComponent } from './unicorn/unicorn.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      description: 'Your Custom Invoice Summary',
      passwordreset:39.99,
      spywareremoval: 99.99,
      ramupgrade: 129.99,
      softwareinstallation: 49.99,
      tuneup: 89.99,
      keyboardcleaning: 45.00,
      diskcleanup: 149.99
    };

    this.dialog.open(UnicornComponent, dialogConfig);
  }
}