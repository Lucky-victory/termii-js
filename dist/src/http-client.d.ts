import { ResponseCallback, IResponse } from '../interfaces';
export declare class TermiiHttpClient {
    protected apiKey: string;
    private baseUrl;
    protected apiPath: string;
    constructor();
    private $requestHandler;
    protected promiseOrCallback<T>(reqBody: any, callback?: ResponseCallback<T>): Promise<IResponse<T>> | undefined;
}
