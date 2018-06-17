export class User{
    usertype: string;
    username: string;
    
    constructor(username:string,usertype:string){
        this.username = username;
        this.usertype = usertype;
    }
}