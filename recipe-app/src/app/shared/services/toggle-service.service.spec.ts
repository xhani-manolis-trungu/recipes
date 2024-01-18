import { TestBed } from '@angular/core/testing';
import { ToggleServiceService } from './toggle-service.service';

describe('ToggleServiceService', () => {
  let service: ToggleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially have an empty set', () => {
    expect(service.toggleSet.size).toBe(0);
  });

  it('should return true when calling isShown with an existing key', () => {
    const key = 'testKey';
    service.toggle(key);
    expect(service.isShown(key)).toBeTruthy();
  });

  it('should return false when calling isShown with a non-existing key', () => {
    const key = 'nonExistingKey';
    expect(service.isShown(key)).toBeFalsy();
  });

  it('should show the specified key and hide others when calling toggle with an existing key', () => {
    const existingKey = 'existingKey';
    const otherKey = 'otherKey';
    service.toggle(existingKey);
    service.toggle(otherKey);

    service.toggle(existingKey);

    expect(service.isShown(existingKey)).toBeTruthy();
    expect(service.isShown(otherKey)).toBeFalsy();
  });

  it('should add the specified key when calling toggle with a non-existing key', () => {
    const key = 'newKey';
    service.toggle(key);
    expect(service.isShown(key)).toBeTruthy();
  });

  it('should hide all keys when calling toggle with an existing key', () => {
    const existingKey = 'existingKey';
    const otherKey1 = 'otherKey1';
    const otherKey2 = 'otherKey2';
    service.toggle(existingKey);
    service.toggle(otherKey1);
    service.toggle(otherKey2);

    service.toggle(existingKey);

    expect(service.isShown(existingKey)).toBeTruthy();
    expect(service.isShown(otherKey1)).toBeFalsy();
    expect(service.isShown(otherKey2)).toBeFalsy();
  });
});
