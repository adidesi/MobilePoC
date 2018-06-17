import {User} from './User'

export class ClientUser extends User{
    linkedAccount: string[];
    linkedBeneficiaries : string[];
    accountBalance : string;
    

    constructor(username: string, usertype: string, linkedAccount: string[],linkedBeneficiaries: string[]){
        super(username,usertype);
        
        this.linkedAccount = linkedAccount;
        this.linkedBeneficiaries = linkedBeneficiaries;
    }
}