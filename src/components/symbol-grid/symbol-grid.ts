import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data.provider';
import { SentenceProvider } from '../../providers/sentence.provider';

@Component({
  selector: 'symbol-grid',
  templateUrl: 'symbol-grid.html'
})
export class SymbolGrid {
  constructor(private dataProvider: DataProvider, private sentenceProvider: SentenceProvider) {
  }
  addToSentence(symbol) {
    this.sentenceProvider.addSymbol(symbol);
  }
}
