import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodepanPage } from './codepan.page';

const routes: Routes = [
  {
    path: '',
    component: CodepanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodepanPageRoutingModule {}
