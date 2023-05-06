import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ContactDialogComponent} from './../contact/contact.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    constructor(public dialog: MatDialog) {}
    

    openDialog() {
      const dialogRef = this.dialog.open(ContactDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

}
