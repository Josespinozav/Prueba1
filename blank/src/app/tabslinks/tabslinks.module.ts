import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabslinksPageRoutingModule } from './tabslinks-routing.module';

import { TabslinksPage } from './tabslinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabslinksPageRoutingModule
  ],
  declarations: [TabslinksPage]
})
export class TabslinksPageModule {}
