import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SentenceInput } from './sentence-input';

@NgModule({
  declarations: [
    SentenceInput
  ],
  imports: [
    IonicPageModule.forChild(SentenceInput),
  ],
  exports: [
    SentenceInput
  ]
})
export class SentenceInputModule {}
