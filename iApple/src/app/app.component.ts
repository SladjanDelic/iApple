

import { Component } from '@angular/core';
import { Phone } from './phone';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App'; 

  phones: Phone[] = [
    { id: 1, model: 'iPhone 15',  price: 999.99 },
    { id: 2, model: 'IPhone 15 pro',  price: 1190.99 },
    { id: 3, model: 'Iphone 15 pro max',  price: 1390.99 },   
  ];

  onAddPhone(newPhone: Phone) {
    this.phones.push({
      id: this.phones.length + 1,
      model: newPhone.model,
      price: newPhone.price
    });
  }
}