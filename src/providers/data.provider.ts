import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

// Symbol Interface
export interface Symbol {
  id: string,
  name: string,
  caption: string,
  search_string: string,
  relevance: number,
  picture: {  
    extension: string,
    image_url: string
  },
  license: {
    license: string,
    license_url: string,
    author: string,
    author_url: string
  },
}

// Symbol Category Interface
export interface Category {
  id: string,
  name: string,
  caption: string
}

// Symbol-Category Join
export interface SymbolCategory {
  category_id: string,
  symbols: Array<string>
}

@Injectable()
export class DataProvider {

  public apiUrl : any = 'https://www.opensymbols.org/api/v1/symbols/';
  public symbols: Array<Symbol> = [];
  private symbolsOnFireDB : FirebaseListObservable<any[]>;
  private gridsOnFireDB : FirebaseListObservable<any[]>;
  private symbolsDatabaseList: FirebaseListObservable<any[]>;
  private fireItems: FirebaseListObservable<any[]>;
  
  constructor(private http: Http, private db: AngularFireDatabase, private alertCtrl: AlertController) {

    // Firebase DB location for now
    this.symbolsOnFireDB = this.db.list('/all-symbols');
    
    // One simple data fetch for now
    this.searchSymbols('cat');
    console.log(this.symbols);
  }

  getSymbols(queryString: String) {
    let res: Array<Symbol> = [];

    this.http.get(this.apiUrl + 'search?q=' + queryString).map(response => response.json())
    .subscribe(data => {
      data.forEach(element => {
        res.push({
          id: element.id,
          name: element.name,
          caption: element.name,
          search_string: element.search_string,
          relevance: element.relevance,
          picture: {  
            extension: element.extension,
            image_url: element.image_url
          },
          license: {
            license: element.license,
            license_url: element.license_url,
            author: element.author,
            author_url: element.author_url
          },
        });
      });
    });
    return res;
  }

  searchSymbols(queryString: String) {
    this.http.get(this.apiUrl + 'search?q=' + queryString).map(response => response.json())
    .subscribe(data => {
      data.forEach(element => {
        this.symbols.push({
          id: element.id,
          name: element.name,
          caption: element.name,
          search_string: element.search_string,
          relevance: element.relevance,
          picture: {  
            extension: element.extension,
            image_url: element.image_url
          },
          license: {
            license: element.license,
            license_url: element.license_url,
            author: element.author,
            author_url: element.author_url
          },
        });
      });
    });
  }

  addSymbol(symbol) {
    this.symbols.push(symbol);
  }

  getGrids() {
    this.fireItems = this.db.list('/symbolLibraries', {
      query: {
        limitToFirst: 10
      }
    });
  }

  saveGrid() {
    let alert = this.alertCtrl.create({
      title: 'Save Grid',
      inputs: [
        {
          name: 'gridName',
          placeholder: 'Give it a name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data.gridName) {
              this.symbolsDatabaseList = this.db.list('/symbolLibraries/'+data.gridName);
              this.symbolsDatabaseList.push(this.symbols);
            }
          }
        }
      ]
    });
    alert.present();
  }
}