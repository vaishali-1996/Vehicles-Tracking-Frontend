import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleMasterComponent } from './vehicle-master/vehicle-master.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    VehicleMasterComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VehicleMasterComponent,
    VehicleListComponent
  ]
})
export class VehicleModule { }
