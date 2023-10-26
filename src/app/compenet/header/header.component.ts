import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggle: boolean = false
  constructor(private router: Router) {

  }
  nagation(nav: string) {
    this.router.navigate([nav]);
  }
}
