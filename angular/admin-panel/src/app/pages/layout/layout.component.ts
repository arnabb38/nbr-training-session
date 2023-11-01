import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('nbr.pims.auth');
    this.router.navigate(['/login'])
  }
}
