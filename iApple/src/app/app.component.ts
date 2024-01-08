import { Component } from '@angular/core';
import { Phone } from './phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App'; 

  phones: Phone[] = [];

  onAddPhone(newPhone: Phone) {
    this.phones.push({
      id: this.phones.length + 1,
      model: newPhone.model,
      price: newPhone.price
    });
  }
}
