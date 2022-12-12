import {TermiiHttpClient} from './http-client';
import {Utils} from '../helpers/index';
import {ApiPaths} from '../constants/index';
import {IResponse,ResponseCallback} from '../interfaces';

export class TermiiOTP extends TermiiHttpClient{
   private data:any;
   constructor(){
      super()
   }
 async  sendSms(options,callback?:ResponseCallback){
         this.apiPath=ApiPaths.smsOtpSend;
         const api_key = this.apiKey;
         this.data = Utils.mergeObj({ api_key }, options);
         try {
            const response = await this.promiseOrCallback < T > (this.data, callback);
         
            if (!Utils.isUndefined(response)) {
               return Promise.resolve(response);
            }
         } catch (error) {
            if (Utils.isFunction(callback)) {
               return (callback as ResponseCallback < T > )(null, error);
            }
            return Promise.reject(error);
         }
   }
  async sendEmail(options,callback?:ResponseCallback){
        this.apiPath=ApiPaths.emailOtpSend;
        const api_key = this.apiKey;
        this.data = Utils.mergeObj({ api_key }, options);
        try {
           const response = await this.promiseOrCallback < T > (this.data, callback);
        
           if (!Utils.isUndefined(response)) {
              return Promise.resolve(response);
           }
        } catch (error) {
           if (Utils.isFunction(callback)) {
              return (callback as ResponseCallback < T > )(null, error);
           }
           return Promise.reject(error);
        }
   }
  async voiceCall(options,callback?:ResponseCallback){
         this.apiPath=ApiPaths.voiceOtpCall
   }
   async voiceSend(options,callback?:ResponseCallback){
      this.apiPath=ApiPaths.voiceOtpSend;
      const api_key = this.apiKey;
      this.data = Utils.mergeObj({ api_key }, options);
      try {
         const response = await this.promiseOrCallback < T > (this.data, callback);
      
         if (!Utils.isUndefined(response)) {
            return Promise.resolve(response);
         }
      } catch (error) {
         if (Utils.isFunction(callback)) {
            return (callback as ResponseCallback < T > )(null, error);
         }
         return Promise.reject(error);
      }
   }
  async verify(options,callback?:ResponseCallback){
     this.apiPath=ApiPaths.otpVerify; 
     const api_key = this.apiKey;
     this.data = Utils.mergeObj({ api_key }, options);
     try {
        const response = await this.promiseOrCallback < T > (this.data, callback);
     
        if (!Utils.isUndefined(response)) {
           return Promise.resolve(response);
        }
     } catch (error) {
        if (Utils.isFunction(callback)) {
           return (callback as ResponseCallback < T > )(null, error);
        }
        return Promise.reject(error);
     }
   }
  async generate(options,callback?:ResponseCallback){
     this.apiPath=ApiPaths.smsOtpGenerate;
   const api_key = this.apiKey;
   this.data = Utils.mergeObj({ api_key },options);
   try {
      const response = await this.promiseOrCallback <T> (this.data, callback);
   
      if (!Utils.isUndefined(response)) {
         return Promise.resolve(response);
      }
   } catch (error) {
      if (Utils.isFunction(callback)) {
         return (callback as ResponseCallback < T > )(null, error);
      }
      return Promise.reject(error);
   }
   }
   
}

