import { Injectable } from '@angular/core';

@Injectable()
export class OptionsProvider {

  public settings: any = {
    'readOnClick' : false,
    'addOnClick' : true
  };

  constructor() {
    console.log('inside constructor:', this.settings);
  }

  getReadOnClick() {
    return this.settings.readOnClick;
  }

}
