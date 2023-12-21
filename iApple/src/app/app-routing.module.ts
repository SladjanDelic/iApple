

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';

const routes: Routes = [
 
  { path: 'preporuka', component: PreporukaComponent },
  { path: 'o-nama', component: ONamaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
