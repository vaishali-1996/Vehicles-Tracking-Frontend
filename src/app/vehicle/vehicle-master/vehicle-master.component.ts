import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-master',
  templateUrl: './vehicle-master.component.html',
  styleUrls: ['./vehicle-master.component.css']
})
export class VehicleMasterComponent implements OnInit {

  vehicleForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      vehicleNumber: ['', Validators.required],
      vehicleType: [''],
      chassisNumber: [''],
      engineNumber: [''],
      year: [''],
      loadCapacity: [''],
      make: [''],
      model: [''],
      bodyType: [''],
      organisation: [''],
      deviceId: ['']
    });
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      console.log('Vehicle Data:', this.vehicleForm.value);
    }
  }
}
