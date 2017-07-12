import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { FormControl } from '@angular/forms';

import { DataProvider } from '../../providers/data.provider';

import { SymbolGrid } from '../../components/symbol-grid/symbol-grid';

import { Observable }  from 'rxjs/Observable';
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
  symbols;
  

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public dataProvider: DataProvider) {
  }

  ngOnInit() {
    this.searchTextControl.valueChanges
      .debounceTime(1000)
      .subscribe(val => {
        this.symbols = this.dataProvider.getSymbols(val);
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addSymbol(symbol) {
   this.viewCtrl.dismiss(symbol);
 }
}