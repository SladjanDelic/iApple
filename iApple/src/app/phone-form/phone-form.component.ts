import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {
  phoneForm: FormGroup;
  currentId = 1;
  priceIncrease: number = 0;

  @Output() addPhone = new EventEmitter<Phone>();

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      model: ['', Validators.required],
      price: [0, [Validators.required, this.nonZeroValidator]],
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

      if (this.phoneForm.value.extraRAM) {
        this.priceIncrease += 50;
        console.log('Dodatnih 50 dolara za 8 GB RAM-a.');
      }
      if (this.phoneForm.value.chargerIncluded) {
        this.priceIncrease += 20;
        console.log('Dodatnih 20 dolara za uključen punjač.');
      }
      if (this.phoneForm.value.headphonesIncluded) {
        this.priceIncrease += 30;
        console.log('Dodatnih 30 dolara za uključene slušalice.');
      }

      if (this.priceIncrease > 0) {
        console.log('Ukupna cijena je uvećana za:', this.priceIncrease, 'dolara.');
      }

      const newPhone: Phone = {
        id: this.currentId++,
        model: this.phoneForm.value.model,
        price: this.phoneForm.value.price + this.priceIncrease,
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
