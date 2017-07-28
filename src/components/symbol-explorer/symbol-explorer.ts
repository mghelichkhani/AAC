import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

// Providers
// import { DataProvider } from '../../providers/data.provider';
import { SentenceProvider } from '../../providers/sentence.provider';
// import { FirebaseProvider } from '../../providers/firebase.provider';

// Pages
import { AddsymbolPage } from '../../pages/addsymbol.page/addsymbol.page';
import { AddgridPage } from '../../pages/addgrid.page/addgrid.page';

@Component({
  selector: 'symbol-explorer',
  templateUrl: 'symbol-explorer.html'
})
export class SymbolExplorer {

  currentCollection: any = [];

  constructor(private db: AngularFireDatabase, public modalCtrl: ModalController, private sentenceProvider: SentenceProvider) {}

  ngOnInit() {
    this.currentCollection = this.getSymbols();
  }

  getSymbolsObservable() {
    return this.db.list('/aac-db/symbols');
  }

  getGridsObservable() {
    return this.db.list('/aac-db/grids');
  }

  getGridSymbolObservable() {
    return this.db.list('/aac-db/grid-symbols');
  }

  getSymbols() {
    let res = [];
    this.getSymbolsObservable().subscribe(symbols => {
      symbols.forEach(element => {
        res.push(element);
      });
    })
    return res;
  }

  saveGridAs() {
    let modal = this.modalCtrl.create(AddgridPage);
    // Open Modal for User Input
    modal.present();
    modal.onDidDismiss(_gridName => {    
      // create grid on Firebase
      this.db.list('/aac-db/grids').push({
        name: _gridName,
        image_url: this.currentCollection[0].picture.image_url
      }).then(_grid => {
        // create gridSymbols on Firebase
        this.currentCollection.forEach(element => {
          let obj = this.db.object(`/aac-db/grid-symbols/${_grid.key}/${element.$key}`);
          obj.set(`${element.name}`);
        });
      });
    });
  }

  addToSentence(symbol) {
    this.sentenceProvider.addSymbol(symbol);
  }

  addNewSymbol() {
    let modal = this.modalCtrl.create(AddsymbolPage);
    modal.present();
    modal.onDidDismiss(data => {
      this.getSymbolsObservable().push(data);
      this.currentCollection = this.getSymbols();
    });
  }
}
