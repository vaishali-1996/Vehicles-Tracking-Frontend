import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private apiUrl = 'https://localhost:7215/api/auth/login';

  constructor(private http: HttpClient) {}

   private tokenKey = 'token';
   private userIdKey = 'userIdKey';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserIdFromLocalStorage(){
    const userIdStr = localStorage.getItem(this.userIdKey);
    return userIdStr ? Number(userIdStr) : null;
  }

  setToken(token: string, userID: Number): void {
    localStorage.setItem(this.tokenKey, token);
     if (userID) {
    localStorage.setItem(this.userIdKey,  userID.toString());
  }
  }

  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userIdKey');
  }
}
