import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, Platform } from 'ionic-angular';
import { FormControl } from '@angular/forms';

import { DataProvider } from '../../providers/data.provider';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';


@IonicPage()
@Component({
  selector: 'page-addsymbol-page',
  templateUrl: 'addsymbol.page.html',
})
export class AddsymbolPage {

  searchTextControl = new FormControl();
  searchCollection: any = [];
  

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public dataProvider: DataProvider) {}

  ngOnInit() {
    this.searchTextControl.valueChanges
      .debounceTime(1000)
      .subscribe(val => {
        this.searchCollection = this.dataProvider.getSymbols(val);
      });
  }

  addSymbol(symbol) {
   this.viewCtrl.dismiss(symbol);
  }
}