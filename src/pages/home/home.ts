import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data.provider';
import { SentenceProvider } from '../../providers/sentence.provider';
import { SymbolGrid } from '../../components/symbol-grid';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataProvider, SentenceProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataProvider: DataProvider, private sentenceProvider: SentenceProvider) {

  }

  setDummyData() {
    this.dataProvider.addSymbol({
      id: 58,
      caption: 'ball',
      image: 'http://placehold.it/128x128?text=ball'
    });
  }

}
