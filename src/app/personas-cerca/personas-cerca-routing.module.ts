import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasCercaPage } from './personas-cerca.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasCercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasCercaPageRoutingModule {}
