import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let template: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render name input', () => {
    expect(template.querySelector('input[name="name"]')).toBeTruthy();
    expect(template.querySelector('label[for="name"]')).toBeTruthy();
  });

  it('should render submit button', () => {
    expect(template.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('name should NOT be invalid when component inits', () => {
    expect(component.isNameValid).not.toBe(false);
  });

  it('should render name validation message if name is invalid', () => {
    // Arrange / Given
    component.isNameValid = false;

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(
      template.querySelector('[data-test="name-validation-meesasge"]')
    ).toBeTruthy();
  });

  it('should NOT render name validation message if name is valid', () => {
    // Arrange / Given
    component.isNameValid = true;

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(
      template.querySelector('[data-test="name-validation-meesasge"]')
    ).toBeFalsy();
  });

  it('shoud validate fields when button is clicked', () => {
    // Given
    /* No name is filled in*/

    // When
    const button = template.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    // Then
    expect(component.isNameValid).toBe(false);
  });

  it('shoud validate fields when button is clicked', () => {
    // Given
    component.name = 'Fulano';

    // When
    const button = template.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    // Then
    expect(component.isNameValid).toBe(true);
  });
});
