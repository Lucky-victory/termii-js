import {TermiiHttpClient} from './http-client';
import {Utils} from '../helpers/index';
import {ApiPaths,defaultOTPOptions} from '../constants/index';
import {IResponse,ResponseCallback} from '../interfaces';
import * as OTPOpts from '../interfaces/otp';

export class TermiiOTP extends TermiiHttpClient{
   private data:any;
   constructor(){
      super()
   }
   async  sendSms<T=OTPOpts.TermiiSMSOTPResponse>(options: OTPOpts.TermiiOTPOptions):Promise< IResponse<T>>
   async  sendSms<T=OTPOpts.TermiiSMSOTPResponse>(options: OTPOpts.TermiiOTPOptions,callback:ResponseCallback<T>):Promise<void>
 async  sendSms<T=OTPOpts.TermiiSMSOTPResponse>(options: OTPOpts.TermiiOTPOptions,callback?:ResponseCallback<T>):Promise<void | IResponse<T>>{
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
    async sendEmail<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiEmailOTPOptions):Promise<IResponse<T>>
    async sendEmail<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiEmailOTPOptions,callback:ResponseCallback<T>):Promise<void>
  async sendEmail<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiEmailOTPOptions,callback?:ResponseCallback<T>):Promise<void |IResponse<T>>{
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
   async voiceCall<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiVoiceCallOptions):Promise<IResponse<T>>
   async voiceCall<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiVoiceCallOptions,callback:ResponseCallback<T>):Promise<void>
  async voiceCall<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiVoiceCallOptions,callback?:ResponseCallback<T>):Promise<void | IResponse<T>>{
         this.apiPath=ApiPaths.voiceOtpCall;
          const api_key = this.apiKey;
          this.data = Utils.mergeObj({ api_key,...defaultOTPOptions }, options);
          try {
             const response = await this.promiseOrCallback < T > (this.data, callback);
         
             if (!Utils.isUndefined(response)) {
                return Promise.resolve(response);
             }
          } catch (error: any) {
             if (Utils.isFunction(callback)) {
                return (callback as ResponseCallback < T > )(null, error);
             }
             return Promise.reject(error);
          }
          
   }
   async voiceSend<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiVoiceOTPOptions):Promise<IResponse<T>>
   async voiceSend<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiVoiceOTPOptions,callback:ResponseCallback<T>):Promise<void>
   async voiceSend<T=OTPOpts.TermiiOTPResponse>(options:OTPOpts.TermiiVoiceOTPOptions,callback?:ResponseCallback<T>):Promise<void | IResponse<T>>{
      this.apiPath=ApiPaths.voiceOtpSend;
      const api_key = this.apiKey;
      this.data = Utils.mergeObj({ api_key,...defaultOTPOptions }, options);
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
   async verify<T=OTPOpts.TermiiOTPVerifyResponse>(options:OTPOpts.TermiiOTPVerifyOptions,callback:ResponseCallback<T>):Promise<void>
   async verify<T=OTPOpts.TermiiOTPVerifyResponse>(options:OTPOpts.TermiiOTPVerifyOptions):Promise<IResponse<T>>
  async verify<T=OTPOpts.TermiiOTPVerifyResponse>(options:OTPOpts.TermiiOTPVerifyOptions,callback?:ResponseCallback<T>):Promise<void | IResponse<T>>{
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
     async generate<T=OTPOpts.TermiiOTPGenResponse>(options:OTPOpts.TermiiOTPGenOptions,callback:ResponseCallback<T>): Promise<void>
       async generate<T=OTPOpts.TermiiOTPGenResponse>(options:OTPOpts.TermiiOTPGenOptions): Promise<IResponse<T>>
  async generate<T=OTPOpts.TermiiOTPGenResponse>(options:OTPOpts.TermiiOTPGenOptions,callback?:ResponseCallback<T>): Promise<void | IResponse<T>>{
     this.apiPath=ApiPaths.smsOtpGenerate;
   const api_key = this.apiKey;
   this.data = Utils.mergeObj({ api_key,...defaultOTPOptions },options);
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

