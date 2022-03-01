import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPagePage } from './order-page.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPagePageRoutingModule {}
