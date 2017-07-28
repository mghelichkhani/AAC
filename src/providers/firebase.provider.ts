import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';


@Injectable()
export class FirebaseProvider {
  
  private grids: FirebaseListObservable<any[]>;
  private symbols: FirebaseListObservable<any[]>;
  private gridSymbols: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    // this.grids = db.list('/aac-db/grids');
    // this.symbols = db.list('/aac-db/symbols', { preserveSnapshot: true});
    // this.gridSymbols = db.list('/aac-db/grid_symbols');
  }

  insertSymbol(symbol) {
    console.log('firebaseProvider.InsertSymbol() => ', symbol);
    this.getSymbolsObservable().push(symbol);
  }

  getSymbolsObservable(){
    return this.db.list('/aac-db/symbols');
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
}
