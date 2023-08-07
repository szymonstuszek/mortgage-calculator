import { Component } from '@angular/core';
import { MortgageOffer } from '../model/mortage-offer';

@Component({
  selector: 'app-mortgage-offers',
  templateUrl: './mortgage-offers.component.html',
  styleUrls: ['./mortgage-offers.component.css']
})
export class MortgageOffersComponent {
  mortgageOffers: MortgageOffer[] = [];

  constructor() {
    const mortgageOffer1 = {
      bankName: "ShadyBank",
      maxAmount: 300000
    };

    const mortgageOffer2 = {
      bankName: "WealthyBank",
      maxAmount: 500000
    };

    const mortgageOffer3 = {
      bankName: "RiskyBank",
      maxAmount: 400000
    };

    this.mortgageOffers.push(mortgageOffer1);
    this.mortgageOffers.push(mortgageOffer2);
    this.mortgageOffers.push(mortgageOffer3);
  }

}
