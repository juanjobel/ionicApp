import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDividerPage } from './item-divider.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDividerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDividerPageRoutingModule {}
