import {TermiiHttpClient} from './http-client';
import {TermiiSMSOptions,ITermiiSMSResponse,ITermiiBulkSMSResponse} from '../interfaces/sms';
import { Utils } from '../helpers/index';
import { IResponse,ResponseCallback } from '../interfaces';
import {ApiPaths} from '../constants/index';

export class TermiiSMS extends TermiiHttpClient{
   private data:any;
   
   constructor(){
      super()
   }
   
 async  send<T=ITermiiSMSResponse>(options:TermiiSMSOptions,callback?:ResponseCallback<T>){
      this.apiPath=ApiPaths.smsSend;
   const api_key = this.apiKey;
   this.data = Utils.mergeObj(options, { api_key });
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
  async sendBulk<T=ITermiiBulkSMSResponse>(options:TermiiSMSOptions,callback?:ResponseCallback<T>){
     this.apiPath=ApiPaths.smsBulkSend;
     const api_key=this.apiKey;
     this.data= Utils.mergeObj(options,{api_key});
     try {
    const response= await this.promiseOrCallback<T>(this.data,callback);
    
     if (!Utils.isUndefined(response)) {
        return Promise.resolve(response);
     }
     } catch (error:any) {
        if (Utils.isFunction(callback)) {
           return (callback as ResponseCallback<T>)(null, error);
        }
        return Promise.reject(error);
     }
   }
}
