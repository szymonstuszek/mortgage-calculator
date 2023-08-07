import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageOffersComponent } from './mortgage-offers.component';

describe('MortgageOffersComponent', () => {
  let component: MortgageOffersComponent;
  let fixture: ComponentFixture<MortgageOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageOffersComponent]
    });
    fixture = TestBed.createComponent(MortgageOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
