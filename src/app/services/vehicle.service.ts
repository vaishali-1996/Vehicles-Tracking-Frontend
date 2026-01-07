import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../shared/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
   private vehicle: any;

  private apiUrl = 'https://localhost:7215/api/Vehicle';

  constructor(private http: HttpClient) {}

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  updateVehicle(id: number, vehicle: Vehicle): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setVehicle(vehicle: any) {
    this.vehicle = vehicle;
  }

  getVehicle() {
    return this.vehicle;
  }
}
