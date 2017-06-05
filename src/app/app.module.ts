import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SymbolGrid } from '../components/symbol-grid/symbol-grid';
import { SentenceInput } from '../components/sentence-input/sentence-input';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SettingsPage } from '../pages/settings.page/settings.page';
import { OptionsProvider } from '../providers/options.provider';
import { SentenceProvider } from '../providers/sentence.provider';
import { DataProvider } from '../providers/data.provider';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SymbolGrid,
    SentenceInput,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SymbolGrid,
    SentenceInput,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    OptionsProvider,
    DataProvider,
    SentenceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
