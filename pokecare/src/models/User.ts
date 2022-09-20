
export default class User{
    user_id: string;
    username: string;
    role: string; 

    constructor(user_id: string, username: string, role: string){
        this.user_id = user_id;
        this.username = username;
        this.role = role;
    }
}