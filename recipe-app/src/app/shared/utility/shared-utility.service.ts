import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedUtilityService {
  constructor() {}

  // Function to get the current date and time
  getCurrentDateTime(): string {
    const currentDateTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(currentDateTime);
  }
}
