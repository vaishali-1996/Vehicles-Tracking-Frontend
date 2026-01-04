import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  searchForm!: FormGroup;

  vehicles = [
    {
      vehicleNumber: 'MH12AB1234',
      vehicleType: 'Truck',
      model: 'TATA 407',
      organisation: 'ABC Logistics'
    },
    {
      vehicleNumber: 'DL09XY8899',
      vehicleType: 'Car',
      model: 'Hyundai i20',
      organisation: 'XYZ Pvt Ltd'
    }
  ];

  filteredVehicles: any[] = [];

  currentPage = 1;
  pageSize = 5;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchText: ['']
    });

    this.filteredVehicles = this.vehicles;
  }

  onSearch(): void {
    const text = this.searchForm.value.searchText.toLowerCase();

    this.filteredVehicles = this.vehicles.filter(v =>
      v.vehicleNumber.toLowerCase().includes(text) ||
      v.vehicleType.toLowerCase().includes(text) ||
      v.organisation.toLowerCase().includes(text)
    );

    this.currentPage = 1;
  }

  get paginatedVehicles(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredVehicles.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage * this.pageSize < this.filteredVehicles.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  editVehicle(vehicle: any): void {
    console.log('Edit vehicle:', vehicle);
  }
}
