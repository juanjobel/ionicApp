import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDividerPageRoutingModule } from './item-divider-routing.module';

import { ItemDividerPage } from './item-divider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDividerPageRoutingModule
  ],
  declarations: [ItemDividerPage]
})
export class ItemDividerPageModule {}
