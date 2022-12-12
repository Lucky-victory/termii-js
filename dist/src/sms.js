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
exports.TermiiSMS = void 0;
const http_client_1 = require("./http-client");
const index_1 = require("../helpers/index");
const index_2 = require("../constants/index");
class TermiiSMS extends http_client_1.TermiiHttpClient {
    constructor() {
        super();
    }
    send(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.smsSend;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj(options, { api_key });
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
    sendBulk(options, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiPath = index_2.ApiPaths.smsBulkSend;
            const api_key = this.apiKey;
            this.data = index_1.Utils.mergeObj(options, { api_key });
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
exports.TermiiSMS = TermiiSMS;
