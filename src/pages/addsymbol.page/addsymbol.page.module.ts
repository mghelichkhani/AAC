import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddsymbolPage } from './addsymbol.page';

@NgModule({
  declarations: [
    AddsymbolPage,
  ],
  imports: [
    IonicPageModule.forChild(AddsymbolPage),
  ],
  exports: [
    AddsymbolPage
  ]
})
export class AddsymbolPageModule {}
