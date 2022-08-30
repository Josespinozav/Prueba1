import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonasCercaPageRoutingModule } from './personas-cerca-routing.module';

import { PersonasCercaPage } from './personas-cerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonasCercaPageRoutingModule
  ],
  declarations: [PersonasCercaPage]
})
export class PersonasCercaPageModule {}
