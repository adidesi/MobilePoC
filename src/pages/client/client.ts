import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientUser} from '../../shared/models/ClientUser'

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  logged_user:ClientUser;
  
  title_username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
    
    console.log("userProfile"+this.navParams.data);
    this.logged_user = this.navParams.get("userProfile");
    this.title_username = this.logged_user.username;
  }

}
