import { Component } from '@angular/core';
import { SentenceProvider } from '../../providers/sentence.provider'

@Component({
  selector: 'sentence-input',
  templateUrl: 'sentence-input.html'
})
export class SentenceInput {

  constructor(private sentenceProvider: SentenceProvider) {
  }

}
