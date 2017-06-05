import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data.provider';
import { SentenceProvider } from '../../providers/sentence.provider';
import { OptionsProvider } from '../../providers/options.provider';
import { SymbolGrid } from '../../components/symbol-grid';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SettingsPage } from '../settings.page/settings.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataProvider: DataProvider, private sentenceProvider: SentenceProvider, private platform: Platform) {
    this.platform.ready().then(() => {
      console.info('Platform is Ready');
    });
  }

  load() {
    // this.navCtrl.push(SettingsPage, {
    //   someKey: 'something'
    // });
  }


  setDummyData() {
    // this.dataProvider.addSymbol({
    //   id: 58,
    //   caption: 'ball',
    //   image: 'http://placehold.it/128x128?text=ball'
    // });
  }

}
