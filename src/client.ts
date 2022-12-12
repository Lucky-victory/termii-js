import axios from "axios";
import {TermiiOTP} from './otp'
import {TermiiSMS} from './sms'

export interface ITermiiOptions {
   apiKey: string
}
export class TermiiClient {
   private apiKey;
   private baseUrl = 'https://api.ng.termii.com';
   protected apiPath=''
protected apiUrl=`${this.baseUrl}/${this.apiPath}`;

   constructor({ apiKey }: TermiiOptions) {
if(!apiKey || typeof apiKey !=='string'){
   throw new TypeError('`apiKey` must be a string');
}
this.apiKey=apiKey;
   }
private $requestHandler(reqBody,callback){
   
const errorObj: TermiiHttpError = {
   message: "an error occurred",
   data: undefined,
};
const host=this.apiUrl;
const auth=this.apiKey;
axios({
      url: host,
      method: "post",
      headers: {
         "Content-Type": "application/json",
         Authorization: auth,
      },
      data: JSON.stringify(reqBody),
   })
   .then((res) => {
      callback(null, res.data);
   })
   .catch((error) => {
      if (error?.response) {
         errorObj.data = error?.response?.data;
         errorObj.status = error?.response?.status;
      } else if (error?.request) {
         errorObj.data = error?.request;
      }
      errorObj.message = error?.message;
      callback(errorObj, null);
   });
}
   protected promiseOrCallback <T> (
      reqBody: any,
      callback ? : TermiiCallback <T> ,
      
   ): Promise < IHarpeeResponse < T >> | undefined {
      if (Utils.isUndefined(callback)) {
         return new Promise((resolve, reject) => {
            this.$requestHandler(reqBody, (err, result) => {
               if (err)
                  return reject({
                     success: false,
                     data: null,
                     error: err,
                  });

            

               return resolve({
                  success: true,
                  data: result as T,
                  error: null,
               });
            });
         });
      }
      callback &&
         this.$requestHandler(reqBody, (err, result) => {
            if (err) {
               return callback(
                  {
                     success: false,
                     data: null,
                     error: err,
                  },
                  null
               );
            }

            return 
               callback(null, {
                  success: true,
                  data: result as T,
                  error: null,
               });
         });
   
}
TermiiOTP=TermiiOTP
TermiiSMS=TermiiSMS
}

export type TermiiHttpError={
   message?:string,data?:any
}
const T=new TermiiClient({apiKey:''})
const otp=new T.TermiiOTP();
