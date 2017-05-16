import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SymbolGrid } from './symbol-grid';

@NgModule({
  declarations: [
    SymbolGrid,
  ],
  imports: [
    IonicPageModule.forChild(SymbolGrid),
  ],
  exports: [
    SymbolGrid
  ]
})
export class SymbolGridModule {}
