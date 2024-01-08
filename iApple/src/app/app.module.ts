import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneFormComponent,
    NavbarComponent,
    PreporukaComponent,
    ONamaComponent,

    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
   
  ],

    

  bootstrap: [AppComponent]
})
export class AppModule { }