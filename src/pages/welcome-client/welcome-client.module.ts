import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeClientPage } from './welcome-client';

@NgModule({
  declarations: [
    WelcomeClientPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeClientPage),
  ],
})
export class WelcomeClientPageModule {}
