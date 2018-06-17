export class Transaction{
    toAccount: string;
    fromAccount: string;
    amount:string;
    timestamp : Date;
    status:String;


    constructor(toAccount: string, fromAccount: string, amount:string,timestamp : Date, status:String){
        this.toAccount = toAccount;
        this.fromAccount = fromAccount;
        this.amount = amount;
        this.timestamp = timestamp;
        this.status = status;
    }
}

