import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data.provider';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-grids-page',
  templateUrl: 'grids.page.html'
})
export class GridsPage {

  currentCollection: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private db: AngularFireDatabase) {}

  ngOnInit() {
    let res = [];
    this.db.list('/aac-db/grids').subscribe(symbols => {
      symbols.forEach(element => {
        res.push(element);
      });
    })
    this.currentCollection = res;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridsPage');
  }

}
