import {TermiiSMS} from './src/sms'
import {TermiiOTP} from './src/otp'
import {TermiiAuth} from './interfaces/index'
import {Auth} from './src/auth'
;
export class TermiiClient{
   

   constructor(auth: TermiiAuth) {
         if (typeof auth.apiKey !== 'string') 
            throw new TypeError('`apiKey` must be a string');
            
         Auth.config=auth;
         
   }
   TermiiOTP=TermiiOTP
   TermiiSMS=TermiiSMS
}
