import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPagePageRoutingModule } from './order-page-routing.module';

import { OrderPagePage } from './order-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPagePageRoutingModule
  ],
  declarations: [OrderPagePage]
})
export class OrderPagePageModule {}
