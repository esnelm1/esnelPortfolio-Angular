import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      const dialogRef = this.dialog.open(LoginDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
    @Component({
      selector: 'app-login-dialog',
      templateUrl: './login-dialog.component.html',
    })
    export class LoginDialogComponent {
  }

