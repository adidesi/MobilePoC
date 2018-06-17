import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientUser} from '../../shared/models/ClientUser'
import { Platform } from 'ionic-angular';
import {Account} from '../../shared/models/Account'
import { HelpPage } from '../help/help';
import { TransferMoneyPage } from '../transfer-money/transfer-money';

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

  //logged_user:ClientUser;
  title_username: string;
  linkedAccounts: Account[];
  selected_account: Account;
  selected_account_bal:string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
    //this.logged_user = this.navParams.get("userProfile");
    //this.logged_user = new ClientUser("Deepak","client",[new Account("deepak_account","10000"),new Account("fake_deepak_account","5000")],["dhaval_account"]);
    this.title_username = this.navParams.get("userProfile").username;
    this.linkedAccounts = this.navParams.get("userProfile").linkedAccounts;
    this.selected_account = this.linkedAccounts[0];
    this.selected_account_bal = this.selected_account.accountBalance;
  }

  reload(event){
    this.navCtrl.setRoot(ClientPage,{"userProfile": this.navParams.get("userProfile")});
  }

  logout($event){
    this.plt.exitApp();
  }

  displayBalance(){
    this.selected_account_bal = this.selected_account.accountBalance;
  }

  helpPage(event){
    this.navCtrl.push(HelpPage);
  }

  transferMoney(event){
    this.navCtrl.push(TransferMoneyPage,{"userProfile" : this.navParams.get("userProfile"),"selected_acc":this.selected_account});
  }

  checkTransactionHistory(event){

  }

  addBeneficiary(event){

  }
}
