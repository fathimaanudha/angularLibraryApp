import { Role } from "./role";
export class Userdata{
    constructor 
        (public name:String,
        public email:String,
        public password:String,
        role: Role,
        token?: string){}
 
     
 }