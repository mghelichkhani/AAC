import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

@Injectable()
export class DataProvider {

  public apiUrl : any;
  public symbols: any = [];
  private symbolsDatabaseList: FirebaseListObservable<any[]>;
  
  constructor(private http: Http, private db: AngularFireDatabase, private alertCtrl: AlertController) {
    this.apiUrl = 'http://192.168.0.102:5000/api/v1.0/';
    this.symbols = this.getSymbols('cat');
  }

  getSymbols(queryString: String) {
    this.http.get(this.apiUrl + queryString).map(res => res.json()).subscribe(data => {
      this.symbols = data;
    });
  }

  addSymbol(symbol) {
    this.symbols.push(symbol);
  }

  saveGridAs() {
    let alert = this.alertCtrl.create({
      title: 'Save Grid As',
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