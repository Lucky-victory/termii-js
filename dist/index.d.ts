import { TermiiSMS } from './src/sms';
import { TermiiOTP } from './src/otp';
import { TermiiAuth } from './interfaces/index';
export declare class TermiiClient {
    constructor(auth: TermiiAuth);
    TermiiOTP: typeof TermiiOTP;
    TermiiSMS: typeof TermiiSMS;
}
