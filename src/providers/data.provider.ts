import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  public apiUrl : any; 
  public symbols: any = [];
  
  constructor(private http: Http) {
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
}