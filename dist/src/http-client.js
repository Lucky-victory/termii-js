"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermiiHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../helpers/index");
const auth_1 = require("./auth");
class TermiiHttpClient {
    constructor() {
        var _a;
        this.baseUrl = 'https://api.ng.termii.com/api';
        this.apiPath = '';
        this.apiKey = (_a = auth_1.Auth.config) === null || _a === void 0 ? void 0 : _a.apiKey;
    }
    $requestHandler(reqBody, callback) {
        const errorObj = {
            message: "an error occurred",
            data: undefined,
        };
        const host = `${this.baseUrl}/${this.apiPath}`;
        (0, axios_1.default)({
            url: host,
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(reqBody),
        })
            .then((res) => {
            callback(res.data, null);
        })
            .catch((error) => {
            var _a, _b;
            if (error === null || error === void 0 ? void 0 : error.response) {
                errorObj.data = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
                errorObj.status = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status;
            }
            else if (error === null || error === void 0 ? void 0 : error.request) {
                errorObj.data = error === null || error === void 0 ? void 0 : error.request;
            }
            errorObj.message = error === null || error === void 0 ? void 0 : error.message;
            callback(null, errorObj);
        });
    }
    promiseOrCallback(reqBody, callback) {
        if (index_1.Utils.isUndefined(callback)) {
            return new Promise((resolve, reject) => {
                this.$requestHandler(reqBody, (result, err) => {
                    if (err)
                        return reject({
                            success: false,
                            data: null,
                            error: err,
                        });
                    return resolve({
                        success: true,
                        data: result,
                        error: null,
                    });
                });
            });
        }
        callback &&
            this.$requestHandler(reqBody, (result, err) => {
                if (err) {
                    return callback(null, {
                        success: false,
                        data: null,
                        error: err,
                    });
                }
                return callback({
                    success: true,
                    data: result,
                    error: null,
                }, null);
            });
    }
}
exports.TermiiHttpClient = TermiiHttpClient;
