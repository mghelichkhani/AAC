import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SymbolExplorer } from './symbol-explorer';

@NgModule({
  declarations: [
    SymbolExplorer,
  ],
  imports: [
    IonicPageModule.forChild(SymbolExplorer),
  ],
  exports: [
    SymbolExplorer
  ]
})
export class SymbolExplorerModule {}
