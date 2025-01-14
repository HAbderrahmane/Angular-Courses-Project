import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'; // for mocking the response

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Fake API URL

  constructor(private http: HttpClient) {}

  // Simulate a successful login response with fake token
  login(username: string, password: string) {
    const mockResponse = { token: 'mock-token' }; // Mock response
    return of(mockResponse); // Return the mock response wrapped in an observable
  }

  // Simulate a guest login response with fake token
  guestLogin() {
    const mockResponse = { token: 'mock-guest-token' }; // Mock guest token
    return of(mockResponse); // Return the mock response wrapped in an observable
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
