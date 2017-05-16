import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  public symbols: any = [
    {
      id: 1,
      caption: 'I',
      image: 'http://placehold.it/128x128?text=I'
    },
    {
      id: 2,
      caption: 'am',
      image: 'http://placehold.it/128x128?text=am'
    },
    {
      id: 3,
      caption: 'hungry',
      image: 'http://placehold.it/128x128?text=hungry'
    },
    {
      id: 4,
      caption: 'thirsty',
      image: 'http://placehold.it/128x128?text=thirsty'
    },
    {
      id: 5,
      caption: 'want',
      image: 'http://placehold.it/128x128?text=want'
    },
    {
      id: 6,
      caption: 'that',
      image: 'http://placehold.it/128x128?text=that'
    }
  ];

  constructor() {}

  addSymbol(symbol) {
    this.symbols.push(symbol);
  }

}
