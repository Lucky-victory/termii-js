# termii-simple
A Javascript SDK for [Termii](https://termii.com) SMS &amp; OTP(Email,SMS,WhatsApp).



## Installation

`npm i termii-simple` or `yarn add termii-simple`;
## Usage
> Each method supports both promises and callbacks.

You can find your Api Key on your  [Termii dashboard](https://accounts.termii.com/#/)
```js

// ES6 Module
import { TermiiClient } from 'termii-simple'

// commonjs
const { TermiClient }=require('termii-simple');

const client=new TermiiClient({
   apiKey:" your termii Api key"
   
});
// for SMS
const smsClient=new client.TermiiSMS();

const result= await smsClient.send({
   to:"234701234567",
   from:"Sender ID",
   sms:"Hi, this is a test SMS",
   channel:"generic",
   
})
console.log(result.data)
// for OTP
const otpClient=new client.TermiiOTP();

otpClient.generate({
   pin_type:"NUMERIC",
   phone_number:"2347012345678"
},(result,error)=>{
   console.log(result.data);
})
```


