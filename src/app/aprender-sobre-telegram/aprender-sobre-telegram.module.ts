import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprenderSobreTelegramPageRoutingModule } from './aprender-sobre-telegram-routing.module';

import { AprenderSobreTelegramPage } from './aprender-sobre-telegram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprenderSobreTelegramPageRoutingModule
  ],
  declarations: [AprenderSobreTelegramPage]
})
export class AprenderSobreTelegramPageModule {}
