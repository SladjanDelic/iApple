
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Phone } from '../phone';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css'],
  providers: [MobileService],
})
export class PhoneFormComponent {
  phoneForm: FormGroup;
  currentId = 1;
  priceIncrease: number = 0;

  @Output() addPhone = new EventEmitter<Phone>();

  constructor(private fb: FormBuilder, private mobileService: MobileService) {
    this.phoneForm = this.fb.group({
      model: ['', Validators.required],
      price: [0, [Validators.required, this.nonZeroValidator]],
      numberOfPhones: [0, [Validators.required, this.nonZeroValidator]],
      extraRAM: [false],
      chargerIncluded: [false],
      headphonesIncluded: [false],
    });

    this.phoneForm.get('model')!.valueChanges.subscribe((value) => {
      if (value.length < 6) {
        console.log('Dužina modela manja od 6 karaktera. Unesite najmanje 6 karaktera.');
      }
    });
  }

  onSubmit() {
    if (this.phoneForm.valid) {
      this.priceIncrease = 0;

      
      const basePhonePrice = this.phoneForm.value.price;
      this.mobileService.setBasePrice(basePhonePrice);

      
      const numberOfPhones = this.phoneForm.value.numberOfPhones;
      const totalPrice = this.mobileService.calculateTotalPrice(
        numberOfPhones,
        this.phoneForm.value.extraRAM,
        this.phoneForm.value.chargerIncluded,
        this.phoneForm.value.headphonesIncluded
      );

      console.log('Ukupna cijena je uvećana za:', this.priceIncrease, 'dolara.');
      console.log('Ukupna cijena za', numberOfPhones, 'telefona:', totalPrice, 'dolara.');

      const newPhone: Phone = {
        id: this.currentId++,
        model: this.phoneForm.value.model,
        price: totalPrice,
      };

      this.addPhone.emit(newPhone);
      this.phoneForm.reset();
    }
  }

  nonZeroValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    return value !== null && value !== undefined && value !== 0 ? null : { 'nonZero': true };
  }
}
