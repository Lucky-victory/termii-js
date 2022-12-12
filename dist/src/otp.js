"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermiiOTP = void 0;
const http_client_1 = require("./http-client");
const index_1 = require("../helpers/index");
const index_2 = require("../constants/index");
class TermiiOTP extends http_client_1.TermiiHttpClient {
    constructor() {
        super();
    }
    sendSms(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.smsOtpSend;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj({ api_key }, options);
            try {
                const response = yield this.promiseOrCallback(this.data, callback);
                if (!index_1.Utils.isUndefined(response)) {
                    return Promise.resolve(response);
                }
            }
            catch (error) {
                if (index_1.Utils.isFunction(callback)) {
                    return callback(null, error);
                }
                return Promise.reject(error);
            }
        });
    }
    sendEmail(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.emailOtpSend;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj({ api_key }, options);
            try {
                const response = yield this.promiseOrCallback(this.data, callback);
                if (!index_1.Utils.isUndefined(response)) {
                    return Promise.resolve(response);
                }
            }
            catch (error) {
                if (index_1.Utils.isFunction(callback)) {
                    return callback(null, error);
                }
                return Promise.reject(error);
            }
        });
    }
    voiceCall(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.voiceOtpCall;
        });
    }
    voiceSend(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.voiceOtpSend;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj({ api_key }, options);
            try {
                const response = yield this.promiseOrCallback(this.data, callback);
                if (!index_1.Utils.isUndefined(response)) {
                    return Promise.resolve(response);
                }
            }
            catch (error) {
                if (index_1.Utils.isFunction(callback)) {
                    return callback(null, error);
                }
                return Promise.reject(error);
            }
        });
    }
    verify(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.otpVerify;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj({ api_key }, options);
            try {
                const response = yield this.promiseOrCallback(this.data, callback);
                if (!index_1.Utils.isUndefined(response)) {
                    return Promise.resolve(response);
                }
            }
            catch (error) {
                if (index_1.Utils.isFunction(callback)) {
                    return callback(null, error);
                }
                return Promise.reject(error);
            }
        });
    }
    generate(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.smsOtpGenerate;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj({ api_key }, options);
            try {
                const response = yield this.promiseOrCallback(this.data, callback);
                if (!index_1.Utils.isUndefined(response)) {
                    return Promise.resolve(response);
                }
            }
            catch (error) {
                if (index_1.Utils.isFunction(callback)) {
                    return callback(null, error);
                }
                return Promise.reject(error);
            }
        });
    }
}
exports.TermiiOTP = TermiiOTP;
