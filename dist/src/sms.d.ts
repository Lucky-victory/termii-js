import { TermiiHttpClient } from './http-client';
import { TermiiSMSOptions, ITermiiSMSResponse, ITermiiBulkSMSResponse } from '../interfaces/sms';
import { IResponse, ResponseCallback } from '../interfaces';
export declare class TermiiSMS extends TermiiHttpClient {
    private data;
    constructor();
    send<T = ITermiiSMSResponse>(options: TermiiSMSOptions, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
    sendBulk<T = ITermiiBulkSMSResponse>(options: TermiiSMSOptions, callback?: ResponseCallback<T>): Promise<void | IResponse<T>>;
}
