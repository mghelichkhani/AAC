import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionsProvider } from '../../providers/options.provider';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings-page',
  templateUrl: 'settings.page.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public optionsProvider: OptionsProvider) {
    console.log(navParams.get('someKey'));
    console.log('inside settings page constructor:', optionsProvider.settings);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
