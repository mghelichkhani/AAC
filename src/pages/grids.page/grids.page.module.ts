import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridsPage } from './grids.page';

@NgModule({
  declarations: [
    GridsPage,
  ],
  imports: [
    IonicPageModule.forChild(GridsPage),
  ],
  exports: [
    GridsPage
  ]
})
export class GridsPageModule {}
