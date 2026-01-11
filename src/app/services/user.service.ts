import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7215/api/User';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(userID: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userID}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(userID: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${userID}`, user);
  }

  deleteUser(userID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userID}`);
  }
}
