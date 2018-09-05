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
      title: 'Bobs Computer Repair'
    };

    this.dialog.open(UnicornComponent, dialogConfig);
  }
}