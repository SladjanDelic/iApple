import { Component, Output, EventEmitter } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {
  newPhone: Phone = new Phone(0, '', 0);

  @Output() addPhone = new EventEmitter<Phone>();

  onSubmit() {
    this.addPhone.emit(this.newPhone);
    this.newPhone = new Phone(0, '', 0); 
  }
}
