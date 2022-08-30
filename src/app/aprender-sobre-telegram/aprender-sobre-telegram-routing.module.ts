import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprenderSobreTelegramPage } from './aprender-sobre-telegram.page';

const routes: Routes = [
  {
    path: '',
    component: AprenderSobreTelegramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprenderSobreTelegramPageRoutingModule {}
