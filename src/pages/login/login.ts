import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientUser } from '../../shared/models/ClientUser';
import {ClientPage} from '../client/client';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

  clientDeepaklogin(event){
    let deepak  = new ClientUser("Deepak","client",["deepak_account"],["dhaval_account"]);
    //console.log("Client Deepak login"+deepak.username+deepak.usertype+deepak.linkedBeneficiaries+deepak.linkedAccount);
    this.navCtrl.setRoot(ClientPage,{"userProfile" : deepak});
  }

  clientDhavallogin(event){
    let dhaval  = new ClientUser("Dhaval","client",["dhaval_account"],["deepak_account"]);
    console.log("Client Dhaval login");
    //console.log("Client Dhaval login"+deepak.username+deepak.usertype+deepak.linkedBeneficiaries+deepak.linkedAccount);
    this.navCtrl.setRoot(ClientPage,{"userProfile" : dhaval});
  }
}
