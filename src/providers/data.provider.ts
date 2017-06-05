import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  public apiUrl : any; 
  public symbols: any = [];
  // public symbols: any = [
  //   {
  //     id: 1,
  //     caption: 'I',
  //     image: 'http://placehold.it/128x128?text=I'
  //   },
  //   {
  //     id: 2,
  //     caption: 'am',
  //     image: 'http://placehold.it/128x128?text=am'
  //   },
  //   {
  //     id: 3,
  //     caption: 'hungry',
  //     image: 'http://placehold.it/128x128?text=hungry'
  //   },
  //   {
  //     id: 4,
  //     caption: 'thirsty',
  //     image: 'http://placehold.it/128x128?text=thirsty'
  //   },
  //   {
  //     id: 5,
  //     caption: 'want',
  //     image: 'http://placehold.it/128x128?text=want'
  //   },
  //   {
  //     id: 6,
  //     caption: 'that',
  //     image: 'http://placehold.it/128x128?text=that'
  //   }
  // ];

  constructor(private http: Http) {
    this.apiUrl = 'http://localhost:5000/api/v1.0/';
    this.symbols = this.getSymbols('hello');
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



  