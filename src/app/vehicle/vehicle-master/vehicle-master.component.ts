import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/shared/models/vehicle.model';

@Component({
  selector: 'app-vehicle-master',
  templateUrl: './vehicle-master.component.html',
  styleUrls: ['./vehicle-master.component.css']
})
export class VehicleMasterComponent implements OnInit {

  vehicleForm!: FormGroup;
  vehicleID!: number; 

  constructor(private fb: FormBuilder,
     private vehicleService: VehicleService,
     private router: Router) {}

  ngOnInit(): void {
    const vehicleData = this.vehicleService.getVehicle();
    
    this.vehicleForm = this.fb.group({
      // vehicleNumber: ['', Validators.required],
      vehicleNumber: [vehicleData?.vehicleNumber || '', Validators.required],
      vehicleType: [vehicleData?.vehicleType || ''],
      chassisNumber: [vehicleData?.chassisNumber || ''],
      engineNumber: [vehicleData?.engineNumber || ''],
      manufacturingYear: [vehicleData?.manufacturingYear || 2026],
      loadCarryingCapacity: [vehicleData?.loadCarryingCapacity || 0],
      makeOfVehicle: [vehicleData?.makeOfVehicle || ''],
      modelNumber: [vehicleData?.modelNumber || ''],
      bodyType: [vehicleData?.bodyType || ''],
      organisationName: [vehicleData?.organisationName || ''],
      deviceID: [vehicleData?.deviceID || ''],
      userID: [vehicleData?.userID || 1]  
    });
      this.vehicleID = vehicleData?.vehicleID!;
}

//  onSubmit(): void {
//   if (this.vehicleForm.invalid) {
//     return;
//   }

//   const updatedVehicle: Vehicle = {
//     vehicleID: this.vehicleID,   // ✅ ADD THIS
//     ...this.vehicleForm.value
//   };

//   this.vehicleService.updateVehicle(this.vehicleID, updatedVehicle)
//     .subscribe({
//       next: () => {
//         this.router.navigate(['dashboard/dashboard/vehiclesList']);
//       },
//       error: (err) => {
//         console.error('Error updating vehicle:', err);
//       }
//     });
//      this.vehicleService.setVehicle({});
// }

onSubmit1(): void {
  if (this.vehicleForm.invalid) {
    return;
  }

  const vehiclePayload: Vehicle = {
    vehicleID: this.vehicleID,
    ...this.vehicleForm.value
  };

  if (this.vehicleID && this.vehicleID > 0) {
    // 🔵 UPDATE (PUT)
    this.vehicleService.updateVehicle(this.vehicleID, vehiclePayload)
      .subscribe({
        next: () => {
          console.log('Vehicle updated successfully');
          this.afterSave();
        },
        error: (err) => {
          console.error('Error updating vehicle:', err);
        }
      });

  } else {
    // 🟢 CREATE (POST)
    this.vehicleService.createVehicle(vehiclePayload)
      .subscribe({
        next: () => {
          console.log('Vehicle created successfully');
          this.afterSave();
        },
        error: (err) => {
          console.error('Error creating vehicle:', err);
        }
      });
  }
}

private afterSave(): void {
  this.vehicleService.setVehicle({});
  this.router.navigate(['dashboard/dashboard/vehiclesList']);
}


}
