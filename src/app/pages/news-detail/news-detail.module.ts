import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { News-detailPageRoutingModule } from './news-detail-routing.module';

import { News-detailPage } from './news-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    News-detailPageRoutingModule
  ],
  declarations: [News-detailPage]
})
export class News-detailPageModule { }
