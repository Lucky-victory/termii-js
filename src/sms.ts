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
   async  send<T=ITermiiSMSResponse>(options:TermiiSMSOptions):Promise< IResponse<T>>
   async  send<T=ITermiiSMSResponse>(options:TermiiSMSOptions,callback:ResponseCallback<T>):Promise<void>
 async  send<T=ITermiiSMSResponse>(options:TermiiSMSOptions,callback?:ResponseCallback<T>):Promise<void | IResponse<T>>{
      this.apiPath=ApiPaths.smsSend;
   const api_key = this.apiKey;
   this.data = Utils.mergeObj( { api_key,type:"plain" },options);
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
   async sendBulk<T=ITermiiBulkSMSResponse>(options:TermiiSMSOptions):Promise<IResponse<T>>
   async sendBulk<T=ITermiiBulkSMSResponse>(options:TermiiSMSOptions,callback:ResponseCallback<T>):Promise<void>
  async sendBulk<T=ITermiiBulkSMSResponse>(options:TermiiSMSOptions,callback?:ResponseCallback<T>):Promise<void|IResponse<T>>{
     this.apiPath=ApiPaths.smsBulkSend;
     const api_key=this.apiKey;
     this.data= Utils.mergeObj({api_key,type:"plain"},options);
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
