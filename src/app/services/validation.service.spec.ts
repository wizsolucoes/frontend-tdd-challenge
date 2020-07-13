import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  describe('name validation', () => {
    it('a name with 3 characters should be valid', () => {
      // Arrange / Given
      const name = 'Abc';

      // Act / When
      const isValid = service.isNameValid(name);

      // Assert / Then
      expect(isValid).toBe(true);
    });

    it('a name with over 30 characters should not be valid', () => {
      // Arrange / Given
      const name = 'Abcdefghijklmnopqrstuvwxyz Abcdefhgihjk';

      // Act / When
      const isValid = service.isNameValid(name);

      // Assert / Then
      expect(isValid).toBe(false);
    });

    it('empty string should not be a valid name', () => {
      // Arrange / Given
      const name = '';

      // Act / When
      const isValid = service.isNameValid(name);

      // Assert / Then
      expect(isValid).toBe(false);
    });

    it('whitespaces should not be a valid name', () => {
      // Arrange / Given
      const name = '      ';

      // Act / When
      const isValid = service.isNameValid(name);

      // Assert / Then
      expect(isValid).toBe(false);
    });

    it('undefined should not be a valid name', () => {
      // Act / When
      const isValid = service.isNameValid(undefined);

      // Assert / Then
      expect(isValid).toBe(false);
    });
  });
});
