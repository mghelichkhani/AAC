import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Injectable()
export class SentenceProvider {

  public sentence: any = [{
    id: 998,
    caption: 'I',
    image: 'http://placehold.it/128x128/f8e6ff?text=I'
  }];

  constructor(private tts: TextToSpeech) {}

  addSymbol(symbol) {
    this.sentence.push(symbol);
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
