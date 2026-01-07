import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  searchForm!: FormGroup;

  vehicles: any[] = [];
  filteredVehicles: any[] = [];

  currentPage = 1;
  pageSize = 5;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchText: ['']
    });

    this.loadVehicles();
  }

  loadVehicles(): void {
    this.loading = true;

    this.vehicleService.getAllVehicles().subscribe({
      next: (data) => {
        this.vehicles = data;
        this.filteredVehicles = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading vehicles', err);
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    const text = this.searchForm.value.searchText.toLowerCase();

    this.filteredVehicles = this.vehicles.filter(v =>
      v.vehicleNumber?.toLowerCase().includes(text) ||
      v.vehicleType?.toLowerCase().includes(text) ||
      v.organisationName?.toLowerCase().includes(text)
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
  this.vehicleService.setVehicle(vehicle);
    this.router.navigate(['dashboard/dashboard/editVehicle']);
  }
}
