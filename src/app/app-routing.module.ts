import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserMasterComponent } from './user/user-master/user-master.component';
import { VehicleMasterComponent } from './vehicle/vehicle-master/vehicle-master.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'users', component: UserMasterComponent },
  { path: 'vehicles', component: VehicleMasterComponent},
  { path: 'vehicles-list', component: VehicleListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
