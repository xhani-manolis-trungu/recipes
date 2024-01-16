import { Component } from '@angular/core';
import { SharedUtilityService } from '../utility/shared-utility.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent {
  notifications: string[] = [];

  constructor(private sharedUtilityService: SharedUtilityService) {}

  // Function to add a notification
  addNotification(message: string): void {
    this.notifications.push(message);
  }

  // Function to clear all notifications
  clearNotifications(): void {
    this.notifications = [];
  }

  // Example: Function to get the current date and time
  getCurrentDateTime(): string {
    return this.sharedUtilityService.getCurrentDateTime();
  }
}
