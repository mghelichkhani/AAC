import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
// import { TextToSpeech } from '@ionic-native/text-to-speech';

// Providers
import { DataProvider } from '../../providers/data.provider';
import { SentenceProvider } from '../../providers/sentence.provider';
// import { OptionsProvider } from '../../providers/options.provider';
import { FirebaseProvider } from '../../providers/firebase.provider';

// Components
// import { SymbolGrid } from '../../components/symbol-grid';

// Pages
// import { SettingsPage } from '../settings.page/settings.page';
import { AddsymbolPage } from '../addsymbol.page/addsymbol.page';


// Google Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider, private sentenceProvider: SentenceProvider, private platform: Platform, afDB: AngularFireDatabase, public modalCtrl: ModalController, private firebaseProvider: FirebaseProvider) {
    this.items = afDB.list('/');

    // dataProvider.saveGridAs('sample save function');

    this.platform.ready().then(() => {
      console.info('Platform is Ready');
    });
  }
}
