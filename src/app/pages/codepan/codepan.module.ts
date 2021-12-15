import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodepanPageRoutingModule } from './codepan-routing.module';

import { CodepanPage } from './codepan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodepanPageRoutingModule
  ],
  declarations: [CodepanPage]
})
export class CodepanPageModule {}
