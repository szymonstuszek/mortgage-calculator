import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MortgageOffersComponent } from './mortgage-offers/mortgage-offers.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        MatFormFieldModule, 
        MatInputModule, 
        FormsModule, 
        MatButtonModule, 
        MatIconModule, 
        MatCardModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent, MortgageOffersComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have mortgageAmount set to 0 before any changes are made', () => {
    expect(component.mortgageAmount).toBe(0);
  });

  it('should set the correct mortgageAmount after change event is triggered on input', () => {
    const debugElement = fixture.debugElement.query(By.css('[name="amountInput"]'));
    debugElement.triggerEventHandler('change', {target: {value: 500}});
    expect(component.mortgageAmount).toBe(500);
  });
});
