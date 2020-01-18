import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickerPageRoutingModule } from './picker-routing.module';

import { PickerPage } from './picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PickerPage]
})
export class PickerPageModule {}
