import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }