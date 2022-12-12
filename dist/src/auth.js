"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    static set config(authConfig) {
        this.auth = authConfig;
    }
    static get config() {
        return this.auth;
    }
}
exports.Auth = Auth;
