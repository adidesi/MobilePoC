import {Transaction} from './Transaction'

export class Account{
    accountID : string;
    accountBalance : string;
    private transactionHist : Transaction[];
    constructor(accountID: string, accountBalance: string){
        this.accountID = accountID;
        this.accountBalance = accountBalance;
    }

    addTransaction(newTranx : Transaction){
        this.transactionHist.push(newTranx);
    }

    getTransactionHist():Transaction[]{
        return this.transactionHist;
    }
}