import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ClientPage } from '../pages/client/client';
import { HelpPage } from '../pages/help/help';
import { TransferMoneyPage } from '../pages/transfer-money/transfer-money';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ClientPage,
    HelpPage,
    TransferMoneyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ClientPage,
    HelpPage,
    TransferMoneyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
