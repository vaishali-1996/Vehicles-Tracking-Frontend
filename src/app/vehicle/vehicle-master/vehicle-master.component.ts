import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-master',
  templateUrl: './vehicle-master.component.html',
  styleUrls: ['./vehicle-master.component.css']
})
export class VehicleMasterComponent implements OnInit {

  vehicleForm!: FormGroup;

  constructor(private fb: FormBuilder, private vehicleService: VehicleService) {}

  ngOnInit(): void {

      const vehicleData = this.vehicleService.getVehicle();

    this.vehicleForm = this.fb.group({
      // vehicleNumber: ['', Validators.required],
    vehicleNumber: [vehicleData?.vehicleNumber || '', Validators.required],
    vehicleType: [vehicleData?.vehicleType || ''],
    chassisNumber: [vehicleData?.chassisNumber || ''],
    engineNumber: [vehicleData?.engineNumber || ''],
    year: [vehicleData?.year || ''],
    loadCapacity: [vehicleData?.loadCapacity || ''],
    make: [vehicleData?.make || ''],
    model: [vehicleData?.model || ''],
    bodyType: [vehicleData?.bodyType || ''],
    organisation: [vehicleData?.organisation || ''],
    deviceId: [vehicleData?.deviceId || '']
  });
}

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      console.log('Vehicle Data:', this.vehicleForm.value);
    }
  }
}
