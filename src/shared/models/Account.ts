import {Transaction} from './Transaction'

export class Account{
    accountNumber : string;
    accountBalance : string;
    constructor(accountNumber: string, accountBalance: string){
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
}