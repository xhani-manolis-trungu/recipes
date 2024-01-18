import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleServiceService {
  toggleSet: Set<string> = new Set<string>();

  isShown(key: string) {
    return this.toggleSet.has(key);
  }

  toggle(key: string) {
    if (this.toggleSet.has(key)) {
      this.toggleSet.forEach((existingKey) => {
        if (existingKey !== key) {
          this.toggleSet.delete(existingKey);
        }
      });
    } else {
      this.toggleSet.add(key);
    }
  }
}
