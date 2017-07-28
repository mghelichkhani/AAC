import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addgrid-page',
  templateUrl: 'addgrid.page.html',
})
export class AddgridPage {

  gridName;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  saveGridAs(gridName) {
    this.viewCtrl.dismiss(gridName);
  }

}
