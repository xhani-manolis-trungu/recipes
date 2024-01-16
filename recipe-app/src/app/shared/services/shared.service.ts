import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private isAuthenticated: boolean = false;
  private currentUser: string | null = null;

  constructor() {}

  // Function to check if the user is authenticated
  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  // Function to authenticate the user
  authenticateUser(username: string, password: string): boolean {
    // Simulate authentication logic (replace with actual logic in a real application)
    if (username === 'demo' && password === 'password') {
      this.isAuthenticated = true;
      this.currentUser = username;
      return true;
    }
    return false;
  }

  // Function to get the current authenticated user
  getCurrentUser(): string | null {
    return this.currentUser;
  }

  // Function to log out the user
  logoutUser(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
  }
}
