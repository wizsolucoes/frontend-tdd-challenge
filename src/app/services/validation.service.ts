import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  static readonly NAME_MIN_LENGTH = 2;
  static readonly NAME_MAX_LENGTH = 30;
  isNameValid(name: string): boolean {
    return (
      !!name &&
      name.trim().length >= ValidationService.NAME_MIN_LENGTH &&
      name.trim().length <= ValidationService.NAME_MAX_LENGTH
    );
  }

  constructor() {}
}
