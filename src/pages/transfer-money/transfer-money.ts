import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { Account } from '../../shared/models/Account';
import { ClientUser } from '../../shared/models/ClientUser';
import { Transaction } from '../../shared/models/Transaction'
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the TransferMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-money',
  templateUrl: 'transfer-money.html',
})
export class TransferMoneyPage {

  logged_user:ClientUser;
  selectedAccount:Account;
  selectedAccountID:string;
  selectedAccountBalance:string;
  transaction:Transaction;
  username:string;

  selected_bene:string;
  bene_accounts:string[];
  inpt_amount:number;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferMoneyPage');
    this.username = this.navParams.get("userProfile").username;
    this.bene_accounts = this.navParams.get("userProfile").linkedBeneficiaries;
    this.selectedAccountID = this.navParams.get("selected_acc").accountID;
    this.selected_bene = this.bene_accounts[0];
    this.selectedAccountBalance = this.navParams.get("selected_acc").accountBalance;
    this.inpt_amount=0;
  }

  sendToBank(){
    if(parseFloat(this.selectedAccountBalance) - this.inpt_amount > 0){
      this.transaction = new Transaction(this.selected_bene, this.selectedAccountID, this.inpt_amount+"", new Date(),"Pending");
    }else{
      let toast = this.toastCtrl.create({
        message: 'You have Insufficient Balance in the Account',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed Actor4login toast');
      });
    
      toast.present();
    }
  }
}
