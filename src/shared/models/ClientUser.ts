import {User} from './User'
import {Account} from '../../shared/models/Account'

export class ClientUser extends User{
    linkedAccounts: Account[];
    linkedBeneficiaries : string[];
    accountBalance : string;
    

    constructor(username: string, usertype: string, linkedAccounts: Account[],linkedBeneficiaries: string[]){
        super(username,usertype);
        
        this.linkedAccounts = linkedAccounts;
        this.linkedBeneficiaries = linkedBeneficiaries;
    }
}