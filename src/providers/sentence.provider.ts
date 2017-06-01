import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { OptionsProvider } from '../providers/options.provider';

@Injectable()
export class SentenceProvider {

  public sentence: any = [{
    id: 998,
    caption: 'I',
    image: 'http://placehold.it/128x128/f8e6ff?text=I'
  }];

  constructor(private tts: TextToSpeech, private optionsProvider: OptionsProvider) {
    console.log('inside settings page constructor:', optionsProvider.settings);
  }

  addSymbol(symbol) {
    if (this.optionsProvider.settings.readOnClick) {
      this.tts.speak(symbol.caption);
      console.info('"' + symbol.caption + '" was spoken');
    }
    if (this.optionsProvider.settings.addOnClick) {
      console.log(this.optionsProvider.getReadOnClick());
      this.sentence.push(symbol);
    }
  }

  eraseSymbolAt(index) {
    this.sentence.splice(index,1);
  }

  speak() {
    var array = [];
    if(this.sentence.length < 1) {
      return;
    }
    for(var i = 0 ; i < this.sentence.length ; i++) {
        array.push(this.sentence[i].caption);
    };
    var string = array.join(' ');
    this.tts.speak(string)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}
