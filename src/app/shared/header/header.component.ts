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

goToPage(page:any){
this.toggleMenu();
    this.router.navigate(['dashboard/dashboard/'+page]);

}

  goToAddVehicle() {
    this.showMenu = false;
    this.router.navigate(['dashboard/dashboard/newVehicle']);
  }

  logout() {
    this.showMenu = false;
    this.authService.logout(); // clear token/session
    this.router.navigate(['/login']);
  }
}
