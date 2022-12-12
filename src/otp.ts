import {TermiiHttpClient} from './http-client';
import {Utils} from '../helpers/index';
import {ApiPaths} from '../constants/index';
import {IResponse,ResponseCallback} from '../interfaces';

export class TermiiOTP extends TermiiHttpClient{
   private data:any;
   constructor(){
      super()
   }
 async  sendSms<T>(options:any,callback?:ResponseCallback<T>){
         this.apiPath=ApiPaths.smsOtpSend;
         const api_key = this.apiKey;
         this.data = Utils.mergeObj({ api_key }, options);
         try {
            const response = await this.promiseOrCallback < T > (this.data, callback);
         
            if (!Utils.isUndefined(response)) {
               return Promise.resolve(response);
            }
         } catch (error:any) {
            if (Utils.isFunction(callback)) {
               return (callback as ResponseCallback < T > )(null, error);
            }
            return Promise.reject(error);
         }
   }
  async sendEmail<T>(options:any,callback?:ResponseCallback<T>){
        this.apiPath=ApiPaths.emailOtpSend;
        const api_key = this.apiKey;
        this.data = Utils.mergeObj({ api_key }, options);
        try {
           const response = await this.promiseOrCallback < T > (this.data, callback);
        
           if (!Utils.isUndefined(response)) {
              return Promise.resolve(response);
           }
        } catch (error:any) {
           if (Utils.isFunction(callback)) {
              return (callback as ResponseCallback < T > )(null, error);
           }
           return Promise.reject(error);
        }
   }
  async voiceCall<T>(options:any,callback?:ResponseCallback<T>){
         this.apiPath=ApiPaths.voiceOtpCall
   }
   async voiceSend<T>(options:any,callback?:ResponseCallback<T>){
      this.apiPath=ApiPaths.voiceOtpSend;
      const api_key = this.apiKey;
      this.data = Utils.mergeObj({ api_key }, options);
      try {
         const response = await this.promiseOrCallback < T > (this.data, callback);
      
         if (!Utils.isUndefined(response)) {
            return Promise.resolve(response);
         }
      } catch (error:any) {
         if (Utils.isFunction(callback)) {
            return (callback as ResponseCallback < T > )(null, error);
         }
         return Promise.reject(error);
      }
   }
  async verify<T>(options:any,callback?:ResponseCallback<T>){
     this.apiPath=ApiPaths.otpVerify; 
     const api_key = this.apiKey;
     this.data = Utils.mergeObj({ api_key }, options);
     try {
        const response = await this.promiseOrCallback < T > (this.data, callback);
     
        if (!Utils.isUndefined(response)) {
           return Promise.resolve(response);
        }
     } catch (error:any) {
        if (Utils.isFunction(callback)) {
           return (callback as ResponseCallback < T > )(null, error);
        }
        return Promise.reject(error);
     }
   }
  async generate<T>(options:any,callback?:ResponseCallback<T>){
     this.apiPath=ApiPaths.smsOtpGenerate;
   const api_key = this.apiKey;
   this.data = Utils.mergeObj({ api_key },options);
   try {
      const response = await this.promiseOrCallback <T> (this.data, callback);
   
      if (!Utils.isUndefined(response)) {
         return Promise.resolve(response);
      }
   } catch (error:any) {
      if (Utils.isFunction(callback)) {
         return (callback as ResponseCallback < T > )(null, error);
      }
      return Promise.reject(error);
   }
   }
   
}

