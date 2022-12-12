import axios from "axios";
import {TermiiOTP} from './otp'
import {TermiiSMS} from './sms'
import {ResponseCallback} from '../interfaces/sms';
import {Utils} from '../helpers/index';
import {Auth} from './auth';

export class TermiiHttpClient {
   protected apiKey!:string;
   private baseUrl = 'https://api.ng.termii.com/api';
   protected apiPath='';


   constructor(){
this.apiKey=Auth.config?.apiKey;
   }
private $requestHandler(reqBody,callback:ResponseCallback){
   
const errorObj: TermiiHttpError = {
   message: "an error occurred",
   data: undefined,
};
const host=`${this.baseUrl}/${this.apiPath}`;

axios({
      url: host,
      method: "post",
      headers: {
         "Content-Type": "application/json",
         
      },
      data: JSON.stringify(reqBody),
   })
   .then((res) => {
      callback(res.data,null);
   })
   .catch((error) => {
      if (error?.response) {
         errorObj.data = error?.response?.data;
         errorObj.status = error?.response?.status;
      } else if (error?.request) {
         errorObj.data = error?.request;
      }
      errorObj.message = error?.message;
      callback(null,errorObj);
   });
}
   protected promiseOrCallback <T> (
      reqBody: any,
      callback ? : ResponseCallback<T> ,
      
   ): Promise <IResponse<T>> | undefined {
      if (Utils.isUndefined(callback)) {
         return new Promise((resolve, reject) => {
            this.$requestHandler(reqBody, (result,err) => {
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
         this.$requestHandler(reqBody, (result,err) => {
            if (err) {
               return callback(null,
                  {
                     success: false,
                     data: null,
                     error: err,
                  }
               );
            }

            return 
               callback ({
                  success: true,
                  data: result as T,
                  error: null,
               },null);
         });
   
}

}


