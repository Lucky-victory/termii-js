import {TermiiAuth} from '../interfaces/index'

export class Auth{
   private static auth:TermiiAuth;
   static set config(authConfig:TermiiAuth){
      this.auth=authConfig;
   }
   static get config(){
      return this.auth
   }
}
