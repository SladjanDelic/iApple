// mobile.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private basePrice: number = 0;

  setBasePrice(price: number) {
    this.basePrice = price;
  }

  calculateTotalPrice(numberOfPhones: number, extraRAM: boolean, chargerIncluded: boolean, headphonesIncluded: boolean): number {
    let totalPrice = numberOfPhones * this.basePrice;

    if (extraRAM) {
      totalPrice += 50;
    }
    if (chargerIncluded) {
      totalPrice += 20;
    }
    if (headphonesIncluded) {
      totalPrice += 30;
    }

    return totalPrice;
  }
}
