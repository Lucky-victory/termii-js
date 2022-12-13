
export type TermiiOTPOptions={
   api_key?:string;
   /**
    * Type of message that will be generated and sent as part of the OTP message. You can set message type to numeric or alphanumeric
    * */
   message_type:"NUMERIC"|"ALPHANUMERIC";
   /**
    *Represents the number of times the PIN can be attempted before expiration. It has a minimum of one attempt
    * 
    * @default 2
    */
   pin_attempts?:number;
   /**
    * Represents how long the PIN is valid before expiration. The time is in minutes. The minimum time value is 0 and the maximum time value is 60
    * @default 5
    *
    * */
   pin_time_to_live?:number;
   /**
    * The length of the PIN code.It has a minimum of 4 and maximum of 8.
    * @default 6
    * */
   pin_length?:number;
   /**
    * 
    * PIN placeholder.Right before sending the message, PIN code placeholder will be replaced with generate PIN code.
    * 
    * @example < 1234 >
    * */
   pin_placeholder:string;
   /**
    * 
    * Text of a message that would be sent to the destination phone number
    */ 
   message_text:string;
   /**
    * This is the route through which the message is sent. It is either dnd, WhatsApp, or generic or email
    * 
    **/
   channel:TermiiOTPChannels;
   /**
   * Represents the email address if the channel is set to email (Example: `testshola@termii.com`). It represents the destination phone number if other channels are selected. Phone number must be in the international format (Example: `23490126727`)
   */
   to:string;
   /***
    * 
   Represents the configuration ID if the channel is set to email (Example:`0a53c416-uocj-95af-ab3c306aellc`). It can be found on your Termii dashboard at https://accounts.termii.com/#/email-otp-config
   If other channels are selected, it represents a sender ID which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)
    */ 
   from:string
}
export type TermiiVoiceOTPOptions=Pick<TermiiOTPOptions,'api_key'|'pin_length'|'pin_attempts'|'pin_time_to_live'> & {
/**
 * 
 * Text of a message that would be sent to the destination phone number (`Example: 23490126727`)
*/  
   phone_number:string
}
export type TermiiOTPGenOptions=Pick<TermiiOTPOptions,'api_key'|'pin_time_to_live'|'pin_attempts'|'pin_length'> &{
   /**
    *  Text of a message that would be sent to the destination phone number (`Example: 23490126727`)
    */
   phone_number: string;
   /**
    * Type of PIN code that will be generated and sent as part of the OTP message. You can set PIN type to numeric or alphanumeric
    */
   pin_type:"NUMERIC"|"ALPHANUMERIC";
   
}
export type TermiiOTPGenResponse=  {
     status: string;
     data:
     {
        pin_id: string;
        otp: string;
        phone_number: string;
        phone_number_other: string
     }
  }
  export type TermiiOTPVerifyOptions={
     /**
      * 
      * ID of the PIN sent (Example: `"c8dcd048-5e7f-4347-8c89-4470c3af0b"`)
      * */
     pin_id:string;
     /**
     The PIN code (Example: `"195558"`)
     */
     pin:string;
     api_key?:string;
  }
  export type TermiiOTPVerifyResponse={
     verified:"True"|"False",msisdn:string;pinId:string
  }
  
  
export type TermiiVoiceCallOptions={
   /***
    * 
    * `Example: 3344`
    * The code you want your users to receive.It has to be numeric and length must be between 4 and 8 digits.
    * */
   
   code:number;
   /**
    * 
    * Text of a message that would be sent to the destination phone number (`Example: 23490126727`)
    */
   phone_number: string
   
}

export type TermiiEmailOTPOptions={
   api_key?:string;
   /**
    * Represents the email address you are sending to (Example: `test@termii.com`).
    * */
   email_address:string;
   /**
   * This represents the email configuration you have added on your Termii dashboard.It can be found on your Termii dashboard at https://accounts.termii.com/#/ .
   */
   email_configuration_id:string;
   /**
   Represents the OTP sent to the email address
   **/
   code:string;
}

export type TermiiOTPChannels='dnd'|'WhatsApp'|'whatsapp'|'generic'|'email';

export type TermiiSMSOTPResponse={
   pinId:string;
   to:string;
   smsStatus:string
}

export type TermiiOTPResponse=  {
     code: string,
     message_id: string,
     pinId: string,
     message: string,
     balance: number,
     user: string
  }
