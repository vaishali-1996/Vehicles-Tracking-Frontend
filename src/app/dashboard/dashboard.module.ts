import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleMasterComponent } from '../vehicle/vehicle-master/vehicle-master.component';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserMasterComponent } from '../user/user-master/user-master.component';
import { VehicleListComponent } from '../vehicle/vehicle-list/vehicle-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'vehiclesList', pathMatch: 'full' },
      { path: 'dashboard/users', component: UserListComponent },
      { path: 'dashboard/addUser', component: UserMasterComponent},
      { path: 'dashboard/editVehicle', component: VehicleMasterComponent },
      { path: 'dashboard/vehiclesList', component: VehicleListComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}
