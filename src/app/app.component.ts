import { Component } from '@angular/core';
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isNameValid: boolean;
  name: string;

  constructor(private validationService: ValidationService) {}

  validateAndSubmit() {
    this.isNameValid = this.validationService.isNameValid(this.name);

    // if (this.isNameValid) {
    //   send sign up request
    // }
  }
}
