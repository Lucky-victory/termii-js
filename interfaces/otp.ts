
export type TermiiSMSOptions={
   /**
   This is the route through which the message is sent. It is either dnd, whatsapp, or generic
   */
   channel:TermiiSMSChannels;
   /**
    * Your API key (It can be found on your https://accounts.termii.com/#/
    **/
   api_key?:string;
   /**
    * The kind of message that is sent, which is a plain message.
    **/
   type?:TermiiSMSType;
   /**
   Represents the destination phone number. Phone number must be in the international format `(Example: 23490126727)`. You can also send to multiple numbers. To do so put numbers in an array `(Example: [23490555546, 23423490126999])` **Please note: the array takes only 100 phone numbers at a time**
   **/
   to:string|string[];
   /**
    * Text of a message that would be sent to the destination phone number
    * */
   sms:string;
   /**
    * Represents a sender ID for sms which can be Alphanumeric or Device name for Whatsapp. Alphanumeric sender ID length should be between 3 and 11 characters (Example:`CompanyName`)
    **/
   from:string;
   /**
    * This is a media object, it is only available for the High Volume WhatsApp. **When using the media parameter, ensure you are not using the sms parameter**
    * */
   media?:{
      url?:string;caption?:string
   }
}

export interface TermiiSMSResponse{
      message_id: string;
      message:string;
      balance: number;
      user: string;
   }
   export interface TermiiBulkSMSResponse extends TermiiSMSResponse{
      code:string
   }
   
export type TermiiSMSChannels='dnd'|'whatsapp'|'generic'

export type TermiiSMSType='plain'