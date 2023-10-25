import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  close: boolean = false
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.close = true
    const dialogRef = this.dialog.open(MenuComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.close = false
    });
  }
}
