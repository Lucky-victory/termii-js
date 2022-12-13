# termii-js
A Javascript SDK for Termii SMS &amp; OTP(Email,SMS,WhatsApp).

## Why `termii-js`?
[Termii](https://termii.com) requires `api_key` to be included in each data when making a request,and each request is made to a different endpoint.

but with **termii-js**,you don't have to worry about the endpoints, also you will only need to specify your `api_key` once, and `termii-js` will handle the rest.

## Installation

`npm i termii-js` or `yarn add termii-js`;
## Usage

You can find your Api Key on your  [Termii dashboard](https://accounts.termii.com/#/)
```js

// ES6 Module
import { TermiiClient } from 'termii-js'

// commonjs
const { TermiClient }=require('termii-js');

const client=new TermiiClient({
   apiKey:" your termii Api key"
   
});
// for SMS
const smsClient=new client.TermiiSMS();
smsClient.send({
   to:"234701234567",
   from:"Sender ID",
   sms:"Hi, this is a test SMS",
   channel:"generic",
   type:"plain"
})

// for OTP
const otpClient=new client.TermiiOTP();
otpClient.generate({
   pin_type:"NUMERIC",
   phone_number:"2347012345678"
})
```


