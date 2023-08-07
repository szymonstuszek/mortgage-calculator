import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mortgage-calculator';
  mortgageAmount = 0;

  amountChanged(event: any): void {
    this.mortgageAmount = event.target.value;
  }
  
}
