import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { News-detailPage } from './news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: News-detailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class News-detailPageRoutingModule {}
