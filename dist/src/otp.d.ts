import { TermiiHttpClient } from './http-client';
import { IResponse, ResponseCallback } from '../interfaces';
export declare class TermiiOTP extends TermiiHttpClient {
    private data;
    constructor();
    sendSms<T>(options: any, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
    sendEmail<T>(options: any, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
    voiceCall<T>(options: any, callback?: ResponseCallback<T>): Promise<void>;
    voiceSend<T>(options: any, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
    verify<T>(options: any, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
    generate<T>(options: any, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
}
