import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:7215/api';

  constructor(private http: HttpClient) { }

  // Example: GET API
  getTest(): Observable<any> {
    return this.http.get(`${this.baseUrl}/User`);
  }

  // Example: POST API
  addUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, data);
  }
}
