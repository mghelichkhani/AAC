import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddgridPage } from './addgrid.page';

@NgModule({
  declarations: [
    AddgridPage,
  ],
  imports: [
    IonicPageModule.forChild(AddgridPage),
  ],
  exports: [
    AddgridPage
  ]
})
export class AddgridPageModule {}
