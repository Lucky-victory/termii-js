"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermiiClient = void 0;
const sms_1 = require("./src/sms");
const otp_1 = require("./src/otp");
const auth_1 = require("./src/auth");
class TermiiClient {
    constructor(auth) {
        this.TermiiOTP = otp_1.TermiiOTP;
        this.TermiiSMS = sms_1.TermiiSMS;
        if (typeof auth.apiKey !== 'string')
            throw new TypeError('`apiKey` must be a string');
        auth_1.Auth.config = auth;
    }
}
exports.TermiiClient = TermiiClient;
