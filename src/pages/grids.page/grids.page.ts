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

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    dataProvider.getGrids();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridsPage');
  }

}
