import { Component, Input } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  @Input() phones: Phone[] = [];
}