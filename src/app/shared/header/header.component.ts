import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showMenu = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  goToPage(page: string) {
    this.closeMenu();
    this.router.navigate(['dashboard/dashboard/' + page]);
  }

  goToAddVehicle() {
    this.closeMenu();
    this.router.navigate(['dashboard/dashboard/newVehicle']);
  }

  logout() {
    this.closeMenu();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

